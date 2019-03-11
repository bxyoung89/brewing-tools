const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const marked = require("marked");
const renderer = new marked.Renderer();
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
	mode: 'production',
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
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
					},
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
				test: /\.md$/,
				use: [
					{
						loader: "html-loader"
					},
					{
						loader: "markdown-loader",
						options: {
							pedantic: true,
							renderer
						}
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
		],
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
		new SpriteLoaderPlugin(),
		// new BundleAnalyzerPlugin(),
	],
	optimization: {
		providedExports: true,
		usedExports: true,
		splitChunks: {
			cacheGroups: {
				default: false,
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor_app',
					chunks: 'all',
					minChunks: 2
				}
			}
		}
	}
};