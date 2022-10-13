import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/users/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    User,
  },
});
