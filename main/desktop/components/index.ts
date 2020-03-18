/*
 * @Description: 组件引入
 * @LastEditors: xhp
 * @Date: 2020-03-05 17:52:03
 * @LastEditTime: 2020-03-09 22:22:41
 * @FilePath: /hpxin/mywork/myStudy/vtnt/main/desktop/components/index.ts
 */
import vue from 'vue';
import menuComponents from './menu/index';
const {menu,menuItem,subMenu} = menuComponents;
const components = [
    menu,
    menuItem,
    subMenu
] 
const install = (Vue:typeof vue) =>{
    components.forEach((item)=>{
         Vue.use(item)
    })
}
export default {
    install
}