import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { validationInput } from "../../../server/shared/validations/login";

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			identifier: "",
			password: "",
			errors: {}
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		const { errors, isValid } = validationInput(this.state);
		if (!isValid) {
			this.setState({ errors });
		} else {
			this.props.userLoginRequest(this.state).then(
				() => {
					this.props.addFlashMessage({
						type: "success",
						text: "Successfully logged in"
					});
					this.props.history.push("/");
				},
				({ response }) => {
					if (!response.data.sucess) {
						return this.props.addFlashMessage({
							type: "error",
							text: "Invalid credentials.Login Failed"
						});
					}
					this.setState({ errors: response.data.errors });
				}
			);
		}
	}
	render() {
		const { identifier, password, errors } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Login into Community</h1>
				<TextFieldGroup
					label="Username/Email"
					field="identifier"
					value={identifier}
					id="identifier"
					onChange={this.handleChange}
					error={errors.identifier}
				/>
				<TextFieldGroup
					label="Password"
					field="password"
					value={password}
					id="password"
					onChange={this.handleChange}
					error={errors.password}
					type="password"
				/>
				<button className="btn btn-block btn-primary">Login</button>
			</form>
		);
	}
}
