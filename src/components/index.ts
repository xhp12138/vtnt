
import vue from 'vue';
import pullToRefresh from './pull-to-refresh/'
const components = [pullToRefresh]
const install = () => {
    components.forEach((component) => {
        vue.use(component)
    })
}
export {pullToRefresh}
export default {
    install
}
