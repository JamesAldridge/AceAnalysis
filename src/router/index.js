import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home'
import Players from '@/components/Players'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    }
  ]
})
