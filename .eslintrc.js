module.exports = {
	"extends": [
		"airbnb-base",
		"plugin:vue/essential",
	],
	"parserOptions": {
		parser: "babel-eslint",
		allowImportExportEverywhere: true,
	},
	"rules": {
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "double"],
		"max-len": "off",
		"class-methods-use-this": "off",
	},
};