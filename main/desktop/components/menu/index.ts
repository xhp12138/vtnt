/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-05 17:58:51
 * @LastEditTime: 2020-03-09 22:21:32
 * @FilePath: /hpxin/mywork/myStudy/vtnt/main/desktop/components/menu/index.ts
 */

import menu from './menu'
import menuItem from './menu-item'
import subMenu from './submenu'
import vue from 'vue';
export default {
    menu: {
        install: function (Vue: typeof vue) {
            Vue.component((menu as any).name, menu);
        }
    },
    menuItem: {
        install: function (Vue: typeof vue) {
            Vue.component((menuItem as any).name, menuItem);
        }
    },
    subMenu: {
        install: function (Vue: typeof vue) {
            Vue.component((subMenu as any).name, subMenu);
        }
    }

}
