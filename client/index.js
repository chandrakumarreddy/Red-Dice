import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { setUserCredetials } from "./actions/auth";
import { setAuthorization } from "./utils";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

if (localStorage.getItem("jwtToken")) {
	const token = localStorage.getItem("jwtToken");
	store.dispatch(setUserCredetials(token));
	setAuthorization(token);
} else {
	setAuthorization(false);
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
