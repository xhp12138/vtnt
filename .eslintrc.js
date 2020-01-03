module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'eqeqeq': ["off", "always", {"null": "ignore"}]
  }
}
 