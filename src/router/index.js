import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import dialogCall from '../page/dialogCall'
import pictureCall from '../page/pictureCall'
import cameraCall from '../page/cameraCall'
import ScanningCall from '../page/ScanningCall'
import AES from '../page/AES'
import RSACall from '../page/RSACall'
import DESCall from '../page/DESCall'
import apiCall from '../page/apiCall'
import ballDrop from '../page/ballDrop'
import brother from '../page/brother'
import tinymce from '../page/tinymce'
import echarts from '../page/echarts'
import svgMap from '../page/SVG/svgMap'
import tableScroll from '../page/tableScroll'
import listScroll from '../page/listScroll'
import print from '../page/print'
import tabWl from '../page/tabWl'
import userinfo from '../page/node/userinfo'
import Picture from '../page/node/picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/dialogCall',
          name: 'dialogCall',
          component: dialogCall
        },
        {
          path: '/pictureCall',
          name: 'pictureCall',
          component: pictureCall
        },
        {
          path: '/cameraCall',
          name: 'cameraCall',
          component: cameraCall
        },
        {
          path: '/ScanningCall',
          name: 'ScanningCall',
          component: ScanningCall
        },
        {
          path: '/AES',
          name: 'AES',
          component: AES
        },
        {
          path: '/RSACall',
          name: 'RSACall',
          component: RSACall
        },
        {
          path: '/DESCall',
          name: 'DESCall',
          component: DESCall
        },
        {
          path: '/apiCall',
          name: 'apiCall',
          component: apiCall
        },
        {
          path: '/ballDrop',
          name: 'ballDrop',
          component: ballDrop
        },
        {
          path: '/brother',
          name: 'brother',
          component: brother
        },
        {
          path: '/tinymce',
          name: 'tinymce',
          component: tinymce
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: echarts
        },
        {
          path: '/SVG',
          name: 'SVG',
          component: svgMap
        },
        {
          path: '/listScroll',
          name: 'listScroll',
          component: listScroll
        },
        {
          path: '/tableScroll',
          name: 'tableScroll',
          component: tableScroll
        },
        {
          path: '/print',
          name: 'print',
          component: print
        },
        {
          path: '/tabWl',
          name: 'tabWl',
          component: tabWl
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: userinfo
        },
        {
          path: '/Picture',
          name: 'Picture',
          component: Picture
        }
      ]
    }
  ]
})
