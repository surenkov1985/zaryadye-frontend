const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const mode = process.env.NODE_ENV;

const build = {
	context: path.resolve(__dirname, "./src"),

	plugins: [
		new MiniCssExtractPlugin({
			filename: "assets/styles/[name].[contenthash].css",
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "index.html",
		}),

		new HtmlWebpackPlugin({
			filename: "event.html",
			template: "event.html",
		}),

		new HtmlWebpackPlugin({
			filename: "performer.html",
			template: "performer.html",
		}),
		// new CopyPlugin({
		// 	patterns: [{ from: "./static", to: "static", noErrorOnMissing: true }],
		// }),
	],
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	entry: {
		index: ["@babel/polyfill", "./main.js"],
	},
	resolve: {
		extensions: [".js"],
		alias: {
			"": path.resolve(__dirname, "src/"),
		},
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					enforce: true,
				},
			},
		},
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserWebpackPlugin({
				extractComments: false,
			}),
		],
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "assets/js/[name].js",
		chunkFilename: "assets/js/[name].js",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|png|svg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/img/[name][ext]",
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name][ext]",
				},
			},
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node-modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
						presets: [
							[
								"@babel/preset-env",
								{
									targets: "ie 8",
									modules: false,
								},
							],
						],
						plugins: ["@babel/plugin-proposal-class-properties", "transform-object-assign"],
					},
				},
			},
		],
	},
};

const dev = {
	devtool: "source-map",
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, "src"),
		},
		open: true,
		port: 3100,
		host: "localhost",
		compress: false,
		hot: true,
		liveReload: true,
		client: {
			overlay: {
				warnings: true,
				errors: true,
			},
		},
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "assets/js/[name].js",
		chunkFilename: "assets/js/[name].js",
		clean: true,
	},
};

module.exports = Object.assign(build, mode === "development" ? dev : {});
