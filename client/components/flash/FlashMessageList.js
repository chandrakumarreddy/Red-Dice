import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FlashMessage from "./FlashMessage";
import { deleteFlashMessage } from "../../actions/flash";

const FlashMessageList = ({ flashMessages, deleteFlashMessage }) => {
	const messages = flashMessages.map(message => (
		<FlashMessage
			key={message.id}
			message={message}
			deleteFlashMessage={deleteFlashMessage}
		/>
	));
	return messages;
};

FlashMessageList.propTypes = {
	flashMessages: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		flashMessages: state.flashMessages,
		deleteFlashMessage: PropTypes.func.isRequired
	};
};

export default connect(
	mapStateToProps,
	{ deleteFlashMessage }
)(FlashMessageList);
