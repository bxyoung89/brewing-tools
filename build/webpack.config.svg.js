const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');


module.exports = {
	mode: 'development',
	entry: glob.sync(path.join(__dirname, '../images/**/*.svg')),
	module: {
		rules: [
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				options: {
					extract: true,
				}
			}
		]
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist/svgs')
	},
	plugins: [
		new SpriteLoaderPlugin(),
		new webpack.DllPlugin({
			context: __dirname,
			name: '[name]_hash',
			path: path.join('../dist/svgs', __dirname, 'manifest.json'),
		})
	]
};