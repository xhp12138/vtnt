const { transformPath } = require('../utils');
const fs = require('fs-extra')
const exclude = ['assets', 'styles', 'mixins', 'utils']
fs.readdirSync(transformPath('lib/')).forEach((folder) => {
    const stats = fs.statSync(transformPath('lib/' + folder));
    if (!exclude.includes(folder) && stats.isDirectory()) {
        const path = transformPath(`lib/${folder}/style/index.js`)
        fs.ensureFileSync(path);
        fs.writeFile(path,`require('./${folder}.css');require('../../styles/common.css');`, (err) => {
            if (err) throw err;
        });
    }
})