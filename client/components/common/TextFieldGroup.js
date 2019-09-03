import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TextFieldGroup = ({ type, field, value, label, error, onChange, id }) => {
	return (
		<div
			className={classNames("form-group", {
				"has-error": error
			})}
		>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				className="form-control"
				name={field}
				value={value}
				id={id}
				onChange={onChange}
			/>
			{error && <span className="help-block">{error}</span>}
		</div>
	);
};

TextFieldGroup.propTypes = {
	type: PropTypes.string.isRequired,
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired
};
TextFieldGroup.defaultProps = {
	type: "text"
};

export default TextFieldGroup;
