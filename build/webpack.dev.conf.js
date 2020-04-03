const base = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {transformPath,styleloader} = require('./utils');
const entry = {
  'mobile':'./main/mobile/index.ts',
  'desktop': './main/desktop/index.ts'
}
const htmlPlugin = function () {
  const arr = [];
  for(let i in entry) {
    arr.push(
    new HtmlWebpackPlugin({
      filename: `${i}.html`,
      template: transformPath(`main/${i}/index.html`),
      chunks:[i,'vendor'],
      inject: true
    }))
  }
  return arr;
}
const dev = merge(base, {
  entry,
  stats: 'none',
  mode: 'development',
  module:{
    rules: styleloader(['css','scss'],process.env.NODE_ENV)
  },
  plugins: [
   ...htmlPlugin(),
  new ForkTsCheckerWebpackPlugin()
  ]
});
module.exports = dev;
