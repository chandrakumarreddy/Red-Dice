import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { userLoginRequest } from "../../actions/auth";
import { addFlashMessage } from "../../actions/flash";

const LoginPage = ({
	userLoginRequest,
	addFlashMessage,
	history,
	isAutheticated
}) => {
	return isAutheticated ? (
		<Redirect to="/" />
	) : (
		<div className="row">
			<div className="col-md-4 col-md-offset-4">
				<LoginForm
					userLoginRequest={userLoginRequest}
					addFlashMessage={addFlashMessage}
					history={history}
				/>
			</div>
		</div>
	);
};

LoginPage.propTypes = {
	userLoginRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
	isAutheticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	isAutheticated: state.auth.isAuthenticated
});

export default connect(
	mapStateToProps,
	{ userLoginRequest, addFlashMessage }
)(LoginPage);
