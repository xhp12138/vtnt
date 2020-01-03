const base = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const {transformPath} = require('./utils');
const fs = require('fs');
const entry = {};
fs.readdirSync(transformPath('src/components/')).forEach((folder) => {
  const stats = fs.statSync(transformPath('src/components/' + folder));
  if (stats.isDirectory()) {
    const fileList = fs.readdirSync('src/components/' + folder + '/');
    if (fileList.indexOf('index.ts') != -1) {
      entry[folder] = transformPath('src/components/' + folder + '/index.ts');
    } else {
      console.error('请为' + folder + '组件添加index.ts文件');
    }
  }
});
console.log(entry)
const build = merge(base, {
  entry,
  output: {
    path: transformPath('dist'),
    filename: 'components/[name]/index.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './components/[name]/index.css'
    })
  ]
});
module.exports = build;
