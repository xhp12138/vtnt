const base = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { transformPath,styleloader,webpackExternals} = require('./utils');
const build = merge(base, {
  mode: 'production',
  entry:{
    index: transformPath('src/components/index.ts')
  },
  module:{
    rules: styleloader([
      {name:'css'},
      {name:'scss'}
    ],process.env.NODE_ENV)
  },
  output: {
    path: transformPath('lib'),
    filename: "[name].js",
    library: 'vtnt',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      moduleFilename() {
        return './[name].css'
      }
    })
  ],
  stats:'errors-only',
  externals: webpackExternals(),
});
module.exports = build;
