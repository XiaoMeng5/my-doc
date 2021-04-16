import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Login from '@/views/login'

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
