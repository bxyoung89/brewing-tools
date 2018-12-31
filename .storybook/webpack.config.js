
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
				test: /\.(svg)$/,
				use: 'html-loader',
			},
		]
	},
};