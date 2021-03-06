import axios from "axios";
import jwtDecode from "jwt-decode";
import { SET_AUTHORIZATION, USER_LOGOUT } from "../types";
import { setAuthorization } from "../utils";

export function setUserCredetials(token) {
	return {
		type: SET_AUTHORIZATION,
		user: jwtDecode(token)
	};
}

export function userLoginRequest(data) {
	return dispatch => {
		return axios.post("/api/auth", data).then(res => {
			const token = res.data.token;
			localStorage.setItem("jwtToken", token);
			setAuthorization(token);
			dispatch(setUserCredetials(token));
		});
	};
}

export function userLogoutRequest() {
	return dispatch => {
		localStorage.removeItem("jwtToken");
		setAuthorization(false);
		dispatch({
			type: USER_LOGOUT
		});
	};
}
