/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-05-01 11:38:43
 * @LastEditTime: 2020-05-04 12:15:10
 * @FilePath: /mywork/myStudy/vtnt/build/cli/transform-sass.js
 */
const sass = require('node-sass');
const fs = require('fs-extra')
const { transformPath} = require('../utils');
const result = sass.renderSync({
  file: transformPath('src/styles/common.scss'),
})
fs.ensureFileSync(transformPath('lib/styles/common.css'));
fs.writeFile(transformPath('lib/styles/common.css'), result.css, (err) => {
    if (err) throw err;
  });