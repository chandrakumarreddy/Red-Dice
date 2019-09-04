import express from "express";
import path from "path";
import mongoose from "mongoose";

require("dotenv").config();

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";

import usersRouter from "./routes/user";
import authRouter from "./routes/auth";

mongoose.connect("mongodb://localhost:27017/reddice", {
	useNewUrlParser: true
});
mongoose.connection.on("connected", () => console.log("Mongoose connected"));

mongoose.connection.on("error", err =>
	console.log("Mongoose faied to connect", err)
);

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.json());
app.use(
	webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true
	})
);
app.use(webpackHotMiddleware(compiler));

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => console.log("server is up and running"));
