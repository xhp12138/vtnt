
import { SET_PATH } from '../mutations-type';
interface state {
    path ?: string
}
const state = {
   path : ''
};

// getters
const getters = {
};

// actions
const actions = {
};

// mutations
const mutations = {
  [SET_PATH](state:state, payload:any) {
    state.path = payload
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
