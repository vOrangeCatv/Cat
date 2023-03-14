import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/hotal',
    name: 'Hotal',
    component: () => import(/*webpackChunkName: "login" */'../views/hotal.vue')
  },
  {
    path: '/username',
    name: 'Username',
    component: () => import(/*webpackChunkName: "login" */'../views/username.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import(/*webpackChunkName: "login" */'../views/orders.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
