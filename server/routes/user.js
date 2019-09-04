import express from "express";
import { commonSignUpValidations } from "../shared/validations/signup";
const userRouter = express.Router();
import isEmpty from "lodash/isEmpty";
import User from "../model/user";

async function validateInput(data, dataValidations) {
	const { errors } = dataValidations(data);
	const user = await User.findOne(
		{
			$or: [{ email: data.email }, { username: data.username }]
		},
		{ email: 1, username: 1, _id: 0 }
	);
	if (!user) {
		return {
			errors,
			isValid: isEmpty(errors)
		};
	}
	if (user.username === data.username) {
		errors.username = "username already taken";
	}
	if (user.email === data.email) {
		errors.email = "Email already exists";
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
}

userRouter.post("/", async (req, res) => {
	const { errors, isValid } = await validateInput(
		req.body,
		commonSignUpValidations
	);
	if (!isValid) {
		return res.status(400).json(errors);
	}
	const { username, email, password, timezone } = req.body;
	const user = await new User({
		username,
		email,
		password,
		timezone
	}).save();
	res.status(200).json(user);
});

export default userRouter;
