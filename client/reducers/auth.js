import { SET_AUTHORIZATION } from "../types";
import isEmpty from "lodash/isEmpty";

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTHORIZATION:
			return {
				...state,
				isAuthenticated: !isEmpty(action.user),
				user: action.user
			};
		default:
			return state;
	}
};
