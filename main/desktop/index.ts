import Vue from 'vue';
import App from './App';
import createRouter from '../router';
import store from './store'; 
import {SET_PATH} from './store/mutations-type'
import components from './components/index'
import slider from '../../lib/slider/index'
import form from '../../lib/form/index'
import formItem from '../../lib/form-item/index'
import input from '../../lib/input/index'
import '../../lib/slider/index.css' 
import '../../lib/form-item/index.css' 
Vue.use(slider).use(form).use(formItem).use(input)
Vue.config.productionTip = false;
const router = createRouter(false) 
Vue.use(components)
router.beforeEach((to, from, next) => {
  store.commit(SET_PATH,to.name)
  next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
