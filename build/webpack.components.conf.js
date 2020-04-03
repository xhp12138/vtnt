/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-26 14:53:07
 * @LastEditTime: 2020-04-03 09:53:38
 * @FilePath: /mywork/myStudy/vtnt/build/webpack.components.conf.js
 */
const base = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const merge = require('webpack-merge');
const chalk = require('chalk');
const { transformPath,styleloader,webpackExternals,componentsEntry } = require('./utils');

const build = merge(base, {
  mode: 'development',
  entry:componentsEntry(),
  module:{
    rules: styleloader(['scss'],process.env.NODE_ENV)
  },
  output: {
    path: transformPath('lib'),
    filename: function (info) {
      const componentName = info.chunk.name
      return componentName + '/index.js'
    },
    libraryTarget: 'umd',
  },
  stats:'errors-only',
  plugins: [
    new ProgressBarPlugin({
      format:  chalk.blue('build [ :bar ]') + chalk.blue(':percent') + '(:elapsed seconds)',
      clear: false,
      complete:'█'
    }),
    new MiniCssExtractPlugin({
      moduleFilename() {
        return './[name]/index.css'
      }
    })
  ],
  externals:webpackExternals(['mixins', 'utils']),
});
module.exports = build;

