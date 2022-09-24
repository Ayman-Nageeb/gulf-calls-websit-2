import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import VueAnimateOnScroll from "vue-animate-onscroll";
import "animate.css";

Vue.use(VueAnimateOnScroll);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
