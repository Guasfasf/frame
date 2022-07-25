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
    name: 'vueApp', // 应用的名字
    entry: 'http://localhost:10000/', // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
    container: '#vue', // 要渲染到的容器名id
    activeRule: '#/brother' // 通过哪一个路由来激活
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
