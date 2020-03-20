
import vue from 'vue';
import form from './form/'
import formItem from './form-item/'
import icon from './icon/'
import input from './input/'
import pullToRefresh from './pull-to-refresh/'
import slider from './slider/'
const components = [form,formItem,icon,input,pullToRefresh,slider]
const install = () => {
    components.forEach((component) => {
        vue.use(component)
    })
}
export {form,formItem,icon,input,pullToRefresh,slider}
export default {
    install
}
