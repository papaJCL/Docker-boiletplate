const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name]-bundle.js"
	},
	plugins: [htmlPlugin],
	module:{
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/react']
					}
				}
			},
			{
				test: /\.(svg)$/,
				exclude: /node_modules/,
				use: {
					loader: "svg-url-loader",
					options: {
						limit: 10000,
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
