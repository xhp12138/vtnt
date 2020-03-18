import Vue from 'vue'
import VueRouter from 'vue-router'
const componentsJson = require('../src/components/components.json');
Vue.use(VueRouter)

const routes:Array<any> = [];

const createRouter = (mobile = false) => {
  const key = mobile ? 'demo' : 'docs';
  const cpts = componentsJson;
  for(let k in cpts) {
    const cpt = cpts[k];
    const path = cpt[key];
    if (path) routes.push({
      path: `/${k}`,
      name: k,
      component: () => import(`@/${path}`) //TODO 采用模板字符串传入的方式解决import 动态加载失败的问题
    })
  }
  console.log(routes);
  return new VueRouter({
    mode: 'hash',
    routes
  })
}

export default createRouter