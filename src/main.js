import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "animate.css";

Vue.config.productionTip = false;

import axios from "axios";
if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = process.env.VUE_APP_API_PRODUCTION_BASE_URL;
} else {
  axios.defaults.baseURL = process.env.VUE_APP_API_DEVELOPMENT_BASE_URL;
}
axios.defaults.headers.common["Accept"] = "application/json";

import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);

import VueAnimateOnScroll from "vue-animate-onscroll";
Vue.use(VueAnimateOnScroll);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

//if user is logged in add authorization header
if (store.getters["User/isAuthenticated"]) {
  const user = store.getters["User/user"];
  axios.defaults.headers.common["authorization-token"] = user.token;
}
