
import vue from 'vue';
import form from './form/'
import formItem from './form-item/'
import icon from './icon/'
import input from './input/'
import lazyLoad from './lazy-load/'
import picker from './picker/'
import pullToRefresh from './pull-to-refresh/'
import slider from './slider/'
import upload from './upload/'
require('../styles/common.scss')
const components = [form,formItem,icon,input,lazyLoad,picker,pullToRefresh,slider,upload]
const install = () => {
    components.forEach((component) => {
        vue.use(component)
    })
}
export {form,formItem,icon,input,lazyLoad,picker,pullToRefresh,slider,upload}
export default {
    install
}
