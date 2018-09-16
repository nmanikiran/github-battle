const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new htmlWebpackPlugin({
      template: __dirname + '/src/index.html',
    }),
    new BaseHrefWebpackPlugin({
      baseHref: process.env.NODE_ENV == 'development' ? '/' : '/github-battle/',
    }),
  ],
};
