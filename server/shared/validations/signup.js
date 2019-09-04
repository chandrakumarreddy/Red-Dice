import Validator from "validator";
import isEmpty from "lodash/isEmpty";

export const commonSignUpValidations = data => {
	const errors = {};
	if (Validator.isEmpty(data.username)) {
		errors.username = "This field is Required";
	}
	if (Validator.isEmpty(data.email)) {
		errors.email = "This field is Required";
	}
	if (!errors.email && !Validator.isEmail(data.email)) {
		errors.email = "Please enter a valid email";
	}
	if (Validator.isEmpty(data.password)) {
		errors.password = "This field is Required";
	}
	if (Validator.isEmpty(data.passwordConfirmation)) {
		errors.passwordConfirmation = "This field is Required";
	}
	if (
		!errors.password &&
		!errors.passwordConfirmation &&
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
