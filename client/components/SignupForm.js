import React from "react";
import map from "lodash/map";
import timeZones from "../data/timezones";

export default class SignupForm extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirmation: "",
			timezone: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}
	render() {
		const {
			username,
			email,
			password,
			passwordConfirmation,
			timezone
		} = this.state;
		const timezoneList = map(timeZones, (val, key) => (
			<option value={val} key={val}>
				{key}
			</option>
		));
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community</h1>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						className="form-control"
						name="username"
						value={username}
						id="username"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						className="form-control"
						name="email"
						value={email}
						id="email"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control"
						name="password"
						value={password}
						id="password"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
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
				</div>
				<div className="form-group">
					<label htmlFor="timezone">TimeZone</label>
					<select
						className="form-control"
						id="timezone"
						value={timezone}
						onChange={this.handleChange}
						name="timezone"
						required
					>
						<option value="" disabled>
							select your timezone
						</option>
						{timezoneList}
					</select>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary btn-block">
						Join
					</button>
				</div>
			</form>
		);
	}
}
