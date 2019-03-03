import Vue from 'vue'
import Router from 'vue-router'
import Horoscopes from '@/components/Horoscopes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Horoscopes',
      component: Horoscopes
    }
  ]
})
