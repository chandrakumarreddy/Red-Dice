import axios from "axios";

export function setAuthorization(token) {
	if (token) {
		axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
}
