const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const transformPath = (url) => {
  return path.resolve(__dirname + '/../' + url);
};
const isExistFile = (path) => {
  return fs.existsSync(path)
}
const styleloader = (loaders, mode) => {
  const out = [];
  loaders.forEach(loader => {
    const {name,exclude} = loader;
    const defaultLoader = [mode === 'production'
      ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: './style'
        }
      }
      : 'style-loader']
    if (name !== 'css') defaultLoader.push('css-loader')
    const Loader = name == 'scss' ? 'sass-loader' : name + '-loader'
    defaultLoader.push(Loader)
    out.push({
      test: new RegExp('\\.' + name + '$'),
      use: defaultLoader,
      exclude: exclude || []
    })
  });
  return out
}
const webpackExternals = function (enternalsFile = [],options) {
  const externals = Object.assign({
    vue: 'vue'
  }, options);
  enternalsFile.forEach((folder) => {
    const fileList = fs.readdirSync('lib/' + folder + '/');
    fileList.forEach((file) => {
      const f = path.basename(file, '.js')
      externals['@/' + folder + '/' + f] = '../' + folder + '/' + file
    })
  })
  return [externals, nodeExternals({
    whitelist: ['async-validator']
  })]
}
const componentsEntry = function () {
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
  return entry;
}
module.exports = {
  transformPath,
  isExistFile,
  styleloader,
  webpackExternals,
  componentsEntry
};
