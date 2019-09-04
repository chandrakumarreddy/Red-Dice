import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/SignupPage";
import Login from "./components/login/LoginPage";
import requiredAuth from "./components/common/RequiredAuth";

const routes = [
	{ path: "/", component: requiredAuth(Home), exact: true },
	{ path: "/signup", component: Signup },
	{ path: "/login", component: Login }
];

export default routes.map(({ path, component: Component, exact }, index) => (
	<Route exact={exact} path={path} component={Component} key={index} />
));
