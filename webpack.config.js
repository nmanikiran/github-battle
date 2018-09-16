const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = env => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      chunkFilename: '[name].[chunkhash].js',
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
      ],
    },
    mode: env.production ? 'production' : 'development',
    plugins: [
      new Dotenv(),
      new htmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
      new BaseHrefWebpackPlugin({
        baseHref: env.production ? '/github-battle/' : '/',
      }),
    ],
  };
};
