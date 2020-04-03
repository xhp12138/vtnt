import component from './form-item';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue) { 
    vue.component((component as any).cptName,component);
   }
}  