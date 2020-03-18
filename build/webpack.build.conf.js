const base = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { transformPath } = require('./utils');
const fs = require('fs');
// const entry = {};
// fs.readdirSync(transformPath('src/components/')).forEach((folder) => {
//   const stats = fs.statSync(transformPath('src/components/' + folder));
//   if (stats.isDirectory()) {
//     const fileList = fs.readdirSync('src/components/' + folder + '/');
//     if (fileList.indexOf('index.ts') != -1) {
//       entry[folder] = transformPath('src/components/' + folder + '/index.ts');
//     } else {
//       console.error('请为' + folder + '组件添加index.ts文件');
//     }
//   }
// });
// entry['index'] = transformPath('src/components/index.ts')
const build = merge(base, {
  mode: 'development',
  entry:{
    index: transformPath('src/components/index.ts')
  },
  output: {
    path: transformPath('dist'),
    chunkFilename: 'async_[name].js',
    filename: function (info) {
      const componentName = info.chunk.name
      return componentName === 'index' ? 'index.js' : componentName + '/index.js'
    },
    library: 'vtnt',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      moduleFilename({ name }) {
        return name === 'index' ? './index.css' : './[name]/index.css'
      }
    })
  ],
  externals: {
    vue: 'vue'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {  // 提取第三方库 
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all', //共用的动态加载模块和静态加载模块都提取
          name: 'vendor',
          minChunks: 2// 这里的minChunks指的不是代码内import相同的模块次数,而是 webpack entry 入口引入相同模块的次数
          //enforce: true
        }
      }
    }
  }
});
module.exports = build;
