
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { transformPath } = require('./utils');
const path = require('path');
var webpackConfig = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts|tsx|js?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader' // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          // options: {
          //   limit: 20000, // 20kb内的图片转base64
          //   name: '[name].[ext]',
          //   fallback: 'file-loader'
          // }
        }]
      },
      {
        test: /\.(md)$/,
        use: [
          'babel-loader',
          {
            loader: path.resolve('build/markdown.js')
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: {
      // utils: utils.resolve('../src/' + project + '/utils'),
      // plugins: utils.resolve('../plugins'),
      lib: transformPath('lib'),
      '@': transformPath('src'),
      main: transformPath('main')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
module.exports = webpackConfig;
