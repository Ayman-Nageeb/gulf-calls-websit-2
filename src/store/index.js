import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import User from "./modules/users/index";
import Records from "./modules/records/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Records,
  },
  plugins: [new VuexPersistence().plugin],
});
