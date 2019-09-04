import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogoutRequest } from "../actions/auth";

const NavigationBar = ({ isAuthenticated, userLogoutRequest }) => {
	const logout = e => {
		e.preventDefault();
		userLogoutRequest();
	};
	const signedInUser = (
		<ul className="nav navbar-nav navbar-right">
			<li>
				<a href="#" onClick={logout}>
					Logout
				</a>
			</li>
		</ul>
	);
	const guestUser = (
		<ul className="nav navbar-nav navbar-right">
			<li>
				<Link to="/signup">Sign up</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
	);
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">
						Red Dice
					</Link>
				</div>
				<div className="collapse navbar-collapse">
					{isAuthenticated ? signedInUser : guestUser}
				</div>
			</div>
		</nav>
	);
};

NavigationBar.propTypes = {
	userLogoutRequest: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
}

export default connect(
	mapStateToProps,
	{ userLogoutRequest }
)(NavigationBar);
