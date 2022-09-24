import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/ui/Index.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/national-center',
    name: 'National.Centers',
    component: () => import(/* webpackChunkName: "national-center" */ '../views/AboutView.vue')
  },
  {
    path: '/national-leaders',
    name: 'National.Leaders',
    component: () => import(/* webpackChunkName: "national-leaders" */ '../views/AboutView.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
