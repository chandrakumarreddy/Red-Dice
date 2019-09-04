import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { userSignupRequest } from "../../actions/users";
import { addFlashMessage } from "../../actions/flash";

const Signup = ({
	userSignupRequest,
	addFlashMessage,
	history,
	isAuthenticated
}) => {
	return !isAuthenticated ? (
		<div className="row">
			<div className="col-md-4 col-md-offset-4">
				<SignupForm
					userSignupRequest={userSignupRequest}
					addFlashMessage={addFlashMessage}
					history={history}
				/>
			</div>
		</div>
	) : (
		<Redirect to="/" />
	);
};

Signup.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(
	mapStateToProps,
	{ userSignupRequest, addFlashMessage }
)(Signup);
