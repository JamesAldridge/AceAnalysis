import Vue from 'vue'
import Router from 'vue-router'
import Players from '@/components/Players'
import Player from '@/components/Player'
import Tournaments from '@/components/Tournaments'
import Tournament from '@/components/Tournament'
import About from '@/components/About'
import Home from '@/components/Home'
import Stats from '@/components/Stats'
import Events from '@/components/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/Events',
      name: 'Events',
      component: Events
    },
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
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/addTournament',
      name: 'Tournaments',
      component: Tournament
    }
  ]
})
