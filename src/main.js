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
    activeRule: '/brother' // 通过哪一个路由来激活
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
  bind: function (el) {
    console.log('bind函数只会调用一次,指令第一次被绑定到元素被触发')
  },
  inserted: function (el, binding, vnode, oldVnode) {
    /*
     * el表示当顶了该指令的dom对象
     * binding是一个包含了指令各种信息的对象：指令名，指令值，指令表达式和一个包含了修饰符的对象
     * */
    // console.log(el)
    // console.log(binding)
    // console.log(vnode)
    console.log('inserted函数在组件被渲染时候调用')
    el.querySelector('input').focus()
  },
  update: function () {
    console.log('update函数在所有组件的VNode对象更新时调用')
  },
  componentUpdated: function () {
    console.log('componentUpdated指令所在组件的VNode对象和其子类VNode对象全部更新后调用')
  },
  unbind: function () {
    console.log('unbind指令解绑时候被调用')
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
