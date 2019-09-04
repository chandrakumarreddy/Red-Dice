import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const FlashMessage = ({ message, deleteFlashMessage }) => {
	const { type, text, id } = message;
	return (
		<div
			className={classNames("alert", {
				"alert-success": type === "success",
				"alert-danger": type === "error"
			})}
		>
			<button className="close" onClick={() => deleteFlashMessage(id)}>
				<span>&times;</span>
			</button>
			{text}
		</div>
	);
};

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired
};

export default FlashMessage;
