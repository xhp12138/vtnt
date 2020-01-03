import component from './pull-to-refresh';
import Vue from 'vue';
export default { 
   install (vue: typeof  Vue) { 
    vue.component((component as any).name ,component);
   }
}  