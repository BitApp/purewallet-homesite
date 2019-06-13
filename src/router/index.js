import Vue from 'vue'
import Router from 'vue-router'

import Dapp from '@/components/dapps'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component(resolve) {
        if (/mobile/i.test(navigator.userAgent)) {
          require(['../components/Home_m.vue'], resolve)
        } else {
          require(['../components/Home.vue'], resolve)
        }
      }
    },
    {
      path: '/dapps',
      name: 'Dapp',
      component(resolve) {
        if (/mobile/i.test(navigator.userAgent)) {
          require(['../components/dapps/index_m.vue'], resolve)
        } else {
          require(['../components/dapps/index.vue'], resolve)
        }
      }
    }
  ]
})
