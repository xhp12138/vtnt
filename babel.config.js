const env = process.env.JEST_ENV;
const targets = !env
  ? { 'browsers': ['> 1%', 'last 2 versions', 'not ie <= 8', 'iOS 7']}
  : {node: 'current'};
module.exports = function(api) {
  api.cache(true);
  const presets = [
    '@babel/env',
    '@babel/preset-typescript', // TODO  这里使用bable 转换 typescript
    '@vue/babel-preset-jsx' // TODO 转vue中的jsx
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    ["@babel/plugin-proposal-decorators",{
      legacy:true
    }]
  ];

  return {
    presets,
    plugins
  };
};
