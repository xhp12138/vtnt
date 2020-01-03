const base = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {transformPath} = require('./utils');
const dev = merge(base, {
  entry: './main/index.ts',
  stats: 'none',
  mode: 'development',
  module:{
    rules: [
      {
        test: /\.tsx|ts?$/,
        loader: 'ts-loader',
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
   new ForkTsCheckerWebpackPlugin()
  ]
});
module.exports = dev;
