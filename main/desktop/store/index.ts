import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index';
Vue.use(Vuex)
export default new Vuex.Store(state)
