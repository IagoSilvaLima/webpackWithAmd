const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const packageJson = require('./package.json');
const fs = require('fs');

module.exports = {
	entry: {
		app: './app.js',
		// version: './version.json'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Modern Angular'
		}),
		new GenerateJsonPlugin('version.json', {
			version: packageJson.version
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		// alias: {
		// 	angular: path.join(__dirname, 'node_modules/angular/angular.js')
		// }
	},
	module: {
		rules: [
			{
				test: path.join(__dirname, 'node_modules/angular/angular.js'),
				use: 'exports-loader?angular'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
			},
			chunks: 'all'
    }
  }
}