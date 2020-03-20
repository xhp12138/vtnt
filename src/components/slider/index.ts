/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-18 14:34:05
 * @LastEditTime: 2020-03-18 14:34:22
 * @FilePath: /hpxin/mywork/myStudy/vtnt/src/components/slider/index.ts
 */
import component from './slider';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue) { 
    vue.component((component as any).name ,component);
   }
}  