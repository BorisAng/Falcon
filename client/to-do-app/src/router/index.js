import Vue from 'vue'
import Router from 'vue-router'

import TaskRoutes from './taskRoutes'

import MainContent from '@/components/MainContent'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app.dashboard',
      component: MainContent,
      meta: {
        icon: 'home',
        text: 'Dashboard'
      }
    },
    ...TaskRoutes,
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
