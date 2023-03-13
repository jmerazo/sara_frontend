import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EspecieView from '../views/EspecieView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/especie',
    name: 'especie',
    component: EspecieView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/familia',
    name: 'familia',
    component: () => import('../views/FamilySpecieView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
