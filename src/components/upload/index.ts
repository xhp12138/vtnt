/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-03-21 19:29:25
 * @LastEditTime: 2020-04-03 09:13:43
 * @FilePath: /mywork/myStudy/vtnt/src/components/upload/index.ts
 */
import component from './upload';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue) { 
    vue.component((component as any).cptName ,component);
   }
}  