import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popup from '@/components/Popup'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
