'use strict';

module.exports = {
	mode: 'development',
	// Don't attempt to continue if there are any errors.
	bail: true,
	devtool: 'source-map',
	entry: './src',
	output: {
		path: __dirname + '/dist',
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				// @see https://github.com/babel/babel-loader
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			// @see https://github.com/webpack-contrib/less-loader
			{
				test: /\.less$/,
				use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}, {
					loader: 'less-loader' // compiles Less to CSS
				}]
			},
		]
	}
};
