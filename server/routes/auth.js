import express from "express";
import jwt from "jsonwebtoken";
import { validationInput } from "../shared/validations/login";
import User from "../model/user";
import bcrypt from "bcryptjs";
const authRouter = express.Router();

authRouter.post("/", (req, res) => {
	const { identifier, password } = req.body;
	const { errors, isValid } = validationInput({ identifier, password });
	if (!isValid) {
		return res.status(400).json(errors);
	} else {
		User.findOne({
			$or: [{ username: identifier }, { email: identifier }]
		}).then(async user => {
			if (!user) {
				return res.status(400).json({
					errors: { identifier: "Cannot find Username/Email" }
				});
			}
			const hash_password = await bcrypt.compare(password, user.password);
			if (hash_password) {
				const token = jwt.sign(
					{ id: user._id, username: user.username },
					process.env.JWTSECRET
				);
				return res.status(200).json({ token });
			} else {
				return res.status(400).json({ success: false });
			}
		});
	}
});

export default authRouter;
