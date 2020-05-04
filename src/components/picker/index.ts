/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-18 14:34:05
 * @LastEditTime: 2020-04-24 11:11:24
 * @FilePath: /mywork/myStudy/vtnt/src/components/picker/index.ts
 */
import component from './picker';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue) { 
    vue.component((component as any).cptName,component);
   }
}  