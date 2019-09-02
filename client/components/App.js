import React, { PureComponent } from "react";
import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import routes from "../routes";

setConfig({
	showReactDomPatchNotification: false
});

class App extends PureComponent {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<NavigationBar />
					{routes}
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(App);
