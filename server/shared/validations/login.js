import Validator from "validator";
import isEmpty from "lodash/isEmpty";

export function validationInput(data) {
	const errors = {};
	if (Validator.isEmpty(data.identifier)) {
		errors.identifier = "Username/Email cannot be empty";
	}
	if (Validator.isEmpty(data.password)) {
		errors.password = "Password cannot be empty";
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
}
