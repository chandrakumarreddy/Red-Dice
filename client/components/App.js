import React, { PureComponent } from "react";
import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import FlashMessageList from "./flash/FlashMessageList";
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
					<FlashMessageList />
					{routes}
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(App);
