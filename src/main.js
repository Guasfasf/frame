// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/style.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import store from './store'
import bus from '../src/assets/js/eventBus'

import YZmethods from './YZmethods'
Vue.prototype.$YZmethods = YZmethods

Vue.use(bus)
Vue.use(ElementUI, { locale: zhLocale })
/* eslint-disable no-new */
// 注册全局 directive
Vue.directive('focusCursor', {
  inserted: function (el) {
    el.querySelector('input').focus()
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
