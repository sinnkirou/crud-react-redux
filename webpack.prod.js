const merge = require("webpack-merge");
const path = require("path");
const src = path.join(__dirname, "src");
const common = require("./webpack.common.js");
const webpack = require("webpack");

const production = {
	clientConfig: {
		mode: "production",
		entry: {
			client: [ path.join(src, "client.js")]
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].[contenthash].js",
			publicPath: "./",
			chunkFilename: "[name].[contenthash].js",
		},
		devtool: "source-map",
		plugins: [
			new webpack.HashedModuleIdsPlugin()
		]
	},
	serverConfig: {
		mode: "production",
		devtool: "source-map",
	}
};

module.exports = merge.multiple(common, production);