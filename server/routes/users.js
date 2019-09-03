import express from "express";
import { validatorInput } from "../shared/validations/signup";
const userRouter = express.Router();

userRouter.post("/", (req, res) => {
	const { errors, isValid } = validatorInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}
	res.status(200).json(req.body);
});

export default userRouter;
