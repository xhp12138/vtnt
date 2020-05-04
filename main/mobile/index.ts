import Vue from 'vue';
import App from './App';
import hpCpt from '@/components/index'; // TODO 切换正式与测试
import 'lib/index.css' 
import createRouter from '../router';
Vue.use(hpCpt);
Vue.config.productionTip = false;
new Vue({
  router: createRouter(true),
  render: h => h(App)
}).$mount('#app');
