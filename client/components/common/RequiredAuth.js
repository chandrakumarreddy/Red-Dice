import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default ComposedComponent => {
	class Authentication extends React.Component {
		componentDidMount() {
			if (!this.props.isAuthenticated) {
				this.props.history.push("/login");
			}
		}
		componentDidUpdate(prevProps, prevState) {
			if (!prevProps.isAuthenticated) {
				prevProps.history.push("/login");
			}
		}
		render() {
			return <ComposedComponent {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return { isAuthenticated: state.auth.isAuthenticated };
	}

	return connect(mapStateToProps)(Authentication);
};
