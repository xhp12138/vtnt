/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-04-13 16:16:28
 * @LastEditTime: 2020-04-17 18:21:21
 * @FilePath: /mywork/myStudy/vtnt/src/components/lazy-load/index.ts
 */
import Lazy from './lazy-load';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue,opt:any= {}) { 
    const directName = opt.directName || 'lazy';
    const lazy = new Lazy();
    vue.directive(directName, {
        // 当被绑定的元素插入到 DOM 中时…… 
        bind: lazy.bind.bind(lazy),
        unbind:lazy.unbind.bind(lazy)
      })
   }
}  