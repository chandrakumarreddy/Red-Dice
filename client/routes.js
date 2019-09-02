import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Signup";

const routes = [
	{ path: "/", component: Home, exact: true },
	{ path: "/signup", component: Signup },
	{ path: "/login", component: Login }
];

export default routes.map(({ path, component: Component, exact }, index) => (
	<Route exact={exact} path={path} component={Component} key={index} />
));
