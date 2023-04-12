import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/Layout';
import Login from '@/views/Login';
import Home from '@/views/Home';
// () => import('../views/AboutView.vue')

const People = ()=>import('@/views/People')
const List = ()=>import('@/views/People/Peoplelist.vue')
const Admin = ()=>import('@/views/People/admin.vue')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path:'/',
        name:'home',
        component: Home
      },
      {
        path:'/people',
        component: People,
        children:[
          {
            path:'list',
            name:'list',
            component: List
          },
          {
            path:'admin',
            name:'admin',
            component: Admin
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      isShow:false,
    }
  },
];

const router = createRouter({
  routes:routes,
  history: createWebHistory(process.env.BASE_URL),
  
});

export default router;
