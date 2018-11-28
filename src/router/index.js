import Vue from 'vue'
import Router from 'vue-router'
import Players from '@/components/Players'
import Player from '@/components/Player'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/addplayer',
      name: 'addPlayer',
      component: Player
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/tournaments',
      name: 'Players',
      component: Player
    }
  ]
})
