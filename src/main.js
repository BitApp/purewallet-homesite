// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ELEMENT from 'element-ui'
import App from './App'
import router from './router'
import i18n from './i18n'
import 'normalize.css'
import 'element-theme-chalk'
import './stylus/index'


Vue.use(ELEMENT)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
