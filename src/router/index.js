import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Platform from '@/components/openPlatform/open'
import Musician from '@/components/musician/musician'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/platform',
    	name: 'Platform',
    	component: Platform
    },
    {
      path: '/Musician',
      name: 'Musician',
      component: Musician
    }
  ]
})
