import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/ui/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutUs/ui/Index.vue"),
  },
  {
    path: "/national-center",
    name: "National.Centers",
    component: () =>
      import(
        /* webpackChunkName: "national-center" */ "../views/Centers/ui/Index.vue"
      ),
  },
  {
    path: "/national-leaders",
    name: "National.Leaders",
    component: () =>
      import(
        /* webpackChunkName: "national-leaders" */ "../views/Leaders/ui/Index.vue"
      ),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/ContactUs/ui/Index.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/Login/ui/Index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, form, savedPosition) {
    if (savedPosition) return savedPosition;
    else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
      }
      return { x: 0, y: 0 };
    }
  },
});

export default router;
