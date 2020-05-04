const { transformPath, isExistFile } = require('./utils');
const fs = require('fs');
const render = require('json-templater/string')
const kebabCase = require('kebab-case');
const filterList = ['.DS_Store', 'index.ts', 'components.json']
const components =
    fs.readdirSync(transformPath('src/components/')).map((dirName) => {
        return dirName
    }).filter(i => {
        if (!filterList.includes(i)) return i
    });
const transformComponents = [];
components.forEach((componentName) => {
    const name = kebabCase.reverse(componentName);
    const demoPath = `components/${componentName}/demo/index.tsx`;
    const docsPath = `components/${componentName}/README.zh-CN.md`;
    const config = require(transformPath(`src/components/${componentName}/index.config.js`))
    const configOptions = config ? config : {}
    const componentConfig = {
        key: name,
        value: `import ${name} from './${componentName}/'`,
        demo: isExistFile(transformPath(`src/${demoPath}`)) ? demoPath : '',
        docs: isExistFile(transformPath(`src/${docsPath}`)) ? docsPath : '', // TODO 需要修改这是只是测试使用
    }
    for(var i in configOptions) {
        componentConfig[i] = configOptions[i];
    }
    transformComponents.push(componentConfig)
})
const installList = transformComponents.map(i => i.value + '').join('\n')
const componentList = transformComponents.map(i => i.key).join(',')
const commonSass = process.env.NODE_ENV == 'production' ? `require('../styles/common.scss')` : '';
console.log(commonSass)
const template = render(`
import vue from 'vue';
{{installList}}
{{commonSass}}
const components = [{{componentList}}]
const install = () => {
    components.forEach((component) => {
        vue.use(component)
    })
}
export {{exportList}}
export default {
    install
}
`, {
    installList,
    componentList,
    exportList: `{${componentList}}`,
    commonSass
});
const josnTemplate = {}
transformComponents.forEach(i => {
    josnTemplate[i.key] = i
})

fs.writeFileSync(transformPath('src/components/index.ts'), template);
fs.writeFileSync(transformPath('src/components/components.json'), JSON.stringify(josnTemplate));
