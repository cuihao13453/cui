import {createRouter,createWebHistory} from "vue-router"
import Login from '../views/login/index.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/index.vue')
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router