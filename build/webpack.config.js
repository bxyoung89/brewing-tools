const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


module.exports = {
	mode: 'development',
	entry: [
		'./src/index.js',
	],
	devServer: {
		hot: true,
		watchOptions: {
			poll: true
		}
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
					},
					{
						loader: 'vue-svg-inline-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader', // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.(svg)$/,
				use: 'html-loader',
			},
			// {
			// 	test: /\.svg$/,
			// 	loader: 'svg-sprite-loader',
			// 	options: {
			// 		// extract: true,
			// 	}
			// }
		]
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: 'dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index-dev.html',
			template: 'index-dev.html',
			inject: true
		}),
		// new SpriteLoaderPlugin(),
	]
};