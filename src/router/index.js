import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeM from '@/components/Home_m'

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
    }
  ]
})
