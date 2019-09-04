import React from "react";
import PropTypes from "prop-types";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { userSignupRequest } from "../../actions/users";
import { addFlashMessage } from "../../actions/flash";

const Signup = ({ userSignupRequest, addFlashMessage, history }) => {
	return (
		<div className="row">
			<div className="col-md-4 col-md-offset-4">
				<SignupForm
					userSignupRequest={userSignupRequest}
					addFlashMessage={addFlashMessage}
					history={history}
				/>
			</div>
		</div>
	);
};

Signup.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
};

export default connect(
	null,
	{ userSignupRequest, addFlashMessage }
)(Signup);
