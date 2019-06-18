import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Live from '@/components/Live'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
        path: "/live",
        name: "Live",
        component: Live
    }
  ]
})
