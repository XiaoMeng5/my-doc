import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about')
      },
      {
        path: '/photo',
        name: 'photo',
        component: () => import('@/views/photo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
