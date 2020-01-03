import Vue from 'vue';
import App from './App';
import hpCpt from '@/components/';
Vue.use(hpCpt);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app');
