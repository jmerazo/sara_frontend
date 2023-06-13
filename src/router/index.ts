import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EspecieView from '../views/EspecieView.vue'
import AboutView from '../views/AboutView.vue'
import FamilysView from '../views/FamilysView.vue'
import ScientificNameView from '../views/ScientificNameView.vue'

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
    component: AboutView
  },
  {
    path: '/familia',
    name: 'familia',
    component: () => import('../views/FamilySpecieView.vue')
  },
  {
    path: '/familias',
    name: 'familias',
    component: FamilysView
  },
  {
    path: '/scientificname',
    name: 'scientificname',
    component: ScientificNameView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
