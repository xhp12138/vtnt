import component from './icon';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue) { 
    vue.component((component as any).cptName,component);
   }
}  