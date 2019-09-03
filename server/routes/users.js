import express from "express";
import Validator from "validator";
import isEmpty from "lodash/isEmpty";
const userRouter = express.Router();

const validatorInput = data => {
	const errors = {};
	if (Validator.isEmpty(data.username)) {
		errors.username = "Username cannot be empty";
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = "Email cannot be empty";
	}
	if (!Validator.isEmail(data.email)) {
		errors.email = "Please enter a valid email";
	}
	if (Validator.isEmpty(data.password)) {
		errors.password = "password cannot be empty";
	}
	if (Validator.isEmpty(data.passwordConfirmation)) {
		errors.passwordConfirmation = "passwordConfirmation cannot be empty";
	}
	if (
		!errors.password &&
		!Validator.equals(data.password, data.passwordConfirmation)
	) {
		errors.password = "Passwords doesnot match";
		errors.passwordConfirmation = "Passwords doesnot match";
	}
	if (Validator.isEmpty(data.timezone)) {
		errors.timezone = "Please select a valid timezone";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

userRouter.post("/", (req, res) => {
	const { errors, isValid } = validatorInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}
	res.status(200).json(req.body);
});

export default userRouter;
