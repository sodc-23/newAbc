import Vue from 'vue'
import Router from 'vue-router'
import LanePage from '@/components/LanePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LanePage',
      component: LanePage
    }
  ]
})
