import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'
import NoticiasHome from '@/views/NoticiasHome.vue'
import TopicoView from '@/views/TopicoView.vue'
import About from '@/views/SiteAbout.vue'

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
        path:'/noticias/:pagina',
        component: NoticiasHome,
        props: true
      },
      {
        path:`/topicos/:topico`,
        component: TopicoView,
        props: true
      },
      {
        path:'/sobre',
        component: About,
      }
    ]
  },
  {
    path: '/perfil',
    component: () => import("@/layouts/AreaPerfil.vue"),
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
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
