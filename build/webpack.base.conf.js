
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { transformPath } = require('./utils');
var webpackConfig = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        process.env.NODE_ENV !== 'production'
          ? 'style-loader'
          : MiniCssExtractPlugin.loader,
        {
          loader:'css-loader',
          // options: {
          //   modules: {
          //     localIdentName: '[name]__[local]-[hash:base64:5]'
          //   }
          // }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    // {
    //   test: /\.tsx|ts$/,
    //   exclude: /(node_modules)/,
    //   use: [{
    //     loader: 'babel-loader' // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
    //   }, {
    //     loader: 'ts-loader'
    //   }]
    // },
    {
      test: /\.js|tsx|ts$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader' // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
      }]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 20000, // 20kb内的图片转base64
          name: '[name].[ext]',
          fallback: 'file-loader',
          outputPath: '/assets/',
          publicPath: function (url) { // 根据图片名对css文件中的图片和html中img标签的图片路径进行相应的替换
            var path = url;
            if (url.indexOf('bg') == 0) {
              path = '../../assets/' + path;
            } else {
              path = './assets/' + path;
            }
            return path;
          }
        }
      }]
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: {
      // utils: utils.resolve('../src/' + project + '/utils'),
      // plugins: utils.resolve('../plugins'),
      // libs: utils.resolve('../libs'),
      '@': transformPath('src')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
module.exports = webpackConfig;
