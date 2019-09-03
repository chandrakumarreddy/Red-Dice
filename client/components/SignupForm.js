import React from "react";
import map from "lodash/map";
import classNames from "classnames";
import timeZones from "../data/timezones";

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
	onSubmit(e) {
		e.preventDefault();
		this.setState({ errors: {} });
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
				() => {},
				({ response }) =>
					this.setState({ errors: response.data, loading: false })
			);
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
				<div
					className={classNames("form-group", {
						"has-error": errors.username
					})}
				>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						className="form-control"
						name="username"
						value={username}
						id="username"
						onChange={this.handleChange}
					/>
					{errors.username && (
						<span className="help-block">{errors.username}</span>
					)}
				</div>
				<div
					className={classNames("form-group", {
						"has-error": errors.email
					})}
				>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						className="form-control"
						name="email"
						value={email}
						id="email"
						onChange={this.handleChange}
					/>
					{errors.email && (
						<span className="help-block">{errors.email}</span>
					)}
				</div>
				<div
					className={classNames("form-group", {
						"has-error": errors.password
					})}
				>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						name="password"
						value={password}
						id="password"
						onChange={this.handleChange}
					/>
					{errors.password && (
						<span className="help-block">{errors.password}</span>
					)}
				</div>
				<div
					className={classNames("form-group", {
						"has-error": errors.passwordConfirmation
					})}
				>
					<label htmlFor="passwordConfirmation">
						Password Confirmation
					</label>
					<input
						type="password"
						className="form-control"
						name="passwordConfirmation"
						value={passwordConfirmation}
						id="passwordConfirmation"
						onChange={this.handleChange}
					/>
					{errors.passwordConfirmation && (
						<span className="help-block">
							{errors.passwordConfirmation}
						</span>
					)}
				</div>
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
