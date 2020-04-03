/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-18 14:34:05
 * @LastEditTime: 2020-04-03 09:12:02
 * @FilePath: /mywork/myStudy/vtnt/src/components/slider/index.ts
 */
import component from './slider';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue) { 
    vue.component((component as any).cptName,component);
   }
}  