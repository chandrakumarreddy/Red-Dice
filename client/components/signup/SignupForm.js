import React from "react";
import map from "lodash/map";
import classNames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";
import { validatorInput } from "../../../server/shared/validations/signup";
import timeZones from "../../data/timezones";

export default class SignupForm extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirmation: "",
			timezone: "",
			errors: {},
			loading: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	handleChange(e) {
		const newErrors = { ...this.state.errors, [e.target.name]: "" };
		this.setState({ [e.target.name]: e.target.value, errors: newErrors });
	}
	isValid() {
		const { errors, isValid } = validatorInput(this.state);
		if (!isValid) {
			this.setState({ errors });
		}
		return isValid;
	}
	onSubmit(e) {
		e.preventDefault();
		this.setState({ errors: {} });
		if (this.isValid()) {
			const {
				username,
				email,
				password,
				passwordConfirmation,
				timezone
			} = this.state;
			this.setState({ loading: true });
			this.props
				.userSignupRequest({
					username,
					email,
					password,
					passwordConfirmation,
					timezone
				})
				.then(
					() => {
						this.props.addFlashMessage({
							type: "success",
							text: "Successfully logged in"
						});
						this.setState({ loading: false }, () =>
							this.props.history.push("/")
						);
					},
					({ response }) =>
						this.setState({ errors: response.data, loading: false })
				);
		}
	}
	render() {
		const {
			username,
			email,
			password,
			passwordConfirmation,
			timezone,
			errors,
			loading
		} = this.state;
		const timezoneList = map(timeZones, (val, key) => (
			<option value={val} key={val}>
				{key}
			</option>
		));
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community</h1>
				<TextFieldGroup
					label="Username"
					field="username"
					value={username}
					id="username"
					error={errors.username}
					onChange={this.handleChange}
				/>
				<TextFieldGroup
					label="Email"
					field="email"
					value={email}
					id="email"
					error={errors.email}
					onChange={this.handleChange}
				/>
				<TextFieldGroup
					label="Password"
					field="password"
					value={password}
					id="password"
					type="password"
					error={errors.password}
					onChange={this.handleChange}
				/>
				<TextFieldGroup
					label="PasswordConfirmation"
					field="passwordConfirmation"
					type="password"
					value={passwordConfirmation}
					id="passwordConfirmation"
					error={errors.passwordConfirmation}
					onChange={this.handleChange}
				/>
				<div
					className={classNames("form-group", {
						"has-error": errors.timezone
					})}
				>
					<label htmlFor="timezone">TimeZone</label>
					<select
						className="form-control"
						id="timezone"
						value={timezone}
						onChange={this.handleChange}
						name="timezone"
					>
						<option value="" disabled>
							select your timezone
						</option>
						{timezoneList}
					</select>
					{errors.timezone && (
						<span className="help-block">{errors.timezone}</span>
					)}
				</div>
				<div className="form-group">
					<button
						type="submit"
						className="btn btn-primary btn-block"
						disabled={loading}
					>
						Join
					</button>
				</div>
			</form>
		);
	}
}
