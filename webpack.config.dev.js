const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: [
		"webpack-hot-middleware/client",
		path.join(__dirname, "client/index.js")
	],
	output: {
		path: "/",
		publicPath: "/"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.join(__dirname, "client"),
					path.join(__dirname, "server/shared")
				],
				exclude: /node_modules/,
				use: ["react-hot-loader/webpack", "babel-loader"]
			}
		]
	},
	resolve: {
		extensions: [".js"]
	}
};
