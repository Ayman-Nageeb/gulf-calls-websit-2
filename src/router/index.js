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
      import(
        /* webpackChunkName: "contact-us" */ "../views/Login/ui/Index.vue"
      ),
  },
  {
    path: "/staff/admin/patients",
    name: "Staff.Admin.Patients",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/Admin/Patients/ui/Index.vue"
      ),
  },
  {
    path: "/staff/dashboard",
    name: "Staff.Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/Dashboard/ui/Index.vue"
      ),
  },
  {
    path: "/records/create",
    name: "Records.Create",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/AddRecord/ui/Index.vue"
      ),
  },

  {
    path: "/records/:id",
    name: "Records.Show",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/SetRecord/ui/Show.vue"
      ),
  },
  {
    path: "/records/:id/set-data/:pageId",
    name: "Records.SetData",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/SetRecord/ui/Index.vue"
      ),
  },
  {
    path: "/records/:id/basics/set/:pageId",
    name: "Records.Basics.Set",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/SetRecord/ui/Basics.vue"
      ),
  },
  {
    path: "/records/:id/per-index/set/:pageId",
    name: "Records.PreIndex.Set",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/SetRecord/ui/PreIndex.vue"
      ),
  },
  {
    path: "/records/:id/index-data/set/:pageId",
    name: "Records.Index.Set",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/SetRecord/ui/IndexData.vue"
      ),
  },
  {
    path: "/records/:id/post-index/set/:pageId",
    name: "Records.PostIndex.Set",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/Staff/SetRecord/ui/PostIndex.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "hash",
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
