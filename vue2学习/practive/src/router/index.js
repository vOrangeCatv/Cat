import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('../views/content.vue')
  }
]
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})
export default router
