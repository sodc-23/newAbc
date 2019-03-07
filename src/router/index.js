import Vue from 'vue'
import Router from 'vue-router'
import LanePage from '@/components/LanePage'
import Popup from '@/components/Popup'
import Search from '@/components/Search'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LanePage',
      component: LanePage
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
