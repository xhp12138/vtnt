/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-26 17:35:45
 * @LastEditTime: 2020-03-27 09:54:30
 * @FilePath: /hpxin/mywork/myStudy/vtnt/build/test.js
 */
const { transformPath } = require('./utils');
const fs = require('fs');
const transformUrl = ['assets/iconfont']
fs.mkdirSync(transformPath('lib/assets/iconfont'))
transformUrl.forEach(function(url) {
    fs.readdirSync(transformPath('src/' + url)).map(function(dirName) {
        if (dirName !== '.DS_Store') fs.writeFileSync(transformPath('lib/' + url + '/' + dirName), fs.readFileSync(transformPath('src/'+ url + '/' + dirName)));
    })
})
