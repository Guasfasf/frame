// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import store from './store'
import bus from '../src/assets/js/eventBus'
import Gmethods from './Gmethods'
import uploader from 'vue-simple-uploader' // 断点续传
import Print from '@/utils/print'
import message from '@/components/Gdialog/main.js'

import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'glf-vue',
    entry: '//localhost:7105',
    container: '#app',
    activeRule: '/glf'
  }
])
// 启动 qiankun
start()

Vue.prototype.$Gmessage = message
Vue.prototype.$Gmethods = Gmethods
var echarts = require('echarts')
Vue.prototype.$echarts = echarts

Vue.use(Print)
Vue.use(uploader)
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
