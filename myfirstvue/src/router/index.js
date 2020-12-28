import Vue from 'vue'
import VueRouter from 'vue-router'

import Query from '../views/query/UserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/query',
    name: 'Query',
    component: Query,
    alias: '/userlist'
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
  }, {
    path: "/404",
    name: "404Error",
    component: () => import('../components/NotFoundComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router