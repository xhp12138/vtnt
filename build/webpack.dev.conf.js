const base = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {transformPath} = require('./utils');
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
    // rules: [
    //   {
    //     test: /\.tsx|ts?$/,
    //     loader: 'ts-loader',
    //     options: {
    //       // disable type checker - we will use it in fork plugin
    //       transpileOnly: true
    //     }
    //   }
    // ]
  },
  plugins: [
   ...htmlPlugin(),
  new ForkTsCheckerWebpackPlugin()
  ]
});
module.exports = dev;
