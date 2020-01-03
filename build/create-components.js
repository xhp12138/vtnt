const { transformPath } = require('./utils');
const fs = require('fs');
const render = require('json-templater/string')
const kebabCase = require('kebab-case');
const filterList = ['index.ts']

const components =
    fs.readdirSync(transformPath('src/components/')).map((dirName) => {
        return dirName
    }).filter(i => {
        if (!filterList.includes(i)) return i
    });
const transformComponents = [];
components.forEach((componentName)=>{
    const name = kebabCase.reverse(componentName);
    transformComponents.push({
        key:name,
        value: `import ${name} from './${componentName}/'`
    })
})
const installList = transformComponents.map(i=>i.value + '').join('\n')
const componentList = transformComponents.map(i=>i.key).join(',')
const template = render(`
import vue from 'vue';
{{installList}}
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
`,{
    installList,
    componentList,
    exportList: `{${componentList}}`
});
console.log(template)
fs.writeFileSync(transformPath('src/components/index.ts'), template);
