import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'
import NoticiasHome from '@/views/NoticiasHome.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path:'/noticias',
        component: NoticiasHome
      }
    ]
  },
  {
    path: '',
    name: 'blank',
    component: () => import("@/layouts/BlankLayout.vue"),
    children: [
      {
        path: '/login',
        component: Login,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
