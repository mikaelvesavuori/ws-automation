const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
//const BowerWebpackPlugin = require("bower-webpack-plugin");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
//const VendorChunkPlugin = require("webpack-vendor-chunk-plugin");

module.exports = {
	watch: true,
	entry: {
		app: path.resolve(__dirname, "./app.js"),
		//vendors: path.resolve(__dirname, "./Static/scripts/jsx/Vendors.jsx"),
	},
	output: {
		path: path.resolve(__dirname, "./prod/"),
		filename: "[name].js"
		//chunkFileName: "[chunkhash].[name].js"
	},
	resolve: {
		extensions: ["", ".js"]
	},
	module: {
		loaders: [
			{
				test: /\.(js)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				query: {
					presets: [["es2015", {
						modules: false
					}],
				  "stage-0"]
				}
			}
		],
	}
}
