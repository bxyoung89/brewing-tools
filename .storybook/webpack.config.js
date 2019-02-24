const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader', // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
			}
		]
	},
	plugins: [
		new SpriteLoaderPlugin(),
	]
};