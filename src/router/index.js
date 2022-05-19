import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import dialogCall from '../page/plug-in/dialogCall'
import pictureCall from '../page/plug-in/pictureCall'
import cameraCall from '../page/plug-in/cameraCall'
import ScanningCall from '../page/plug-in/ScanningCall'
import tinymce from '../page/plug-in/tinymce'
import print from '../page/plug-in/print'
import odometer from '../page/plug-in/odometer'

import AES from '../page/secret/AES'
import RSACall from '../page/secret/RSACall'
import DESCall from '../page/secret/DESCall'

import listScroll from '../page/roll/listScroll'
import tableScroll from '../page/roll/tableScroll'

import tree from '../page/three3D/tree'
import boxThree from '../page/three3D/boxThree'

import apiCall from '../page/apiCall'
import ballDrop from '../page/ballDrop'
import brother from '../page/brother'
import echarts from '../page/echarts'
import svgMap from '../page/SVG/svgMap'
import tabWl from '../page/tabWl'
import userinfo from '../page/node/userinfo'
import Picture from '../page/node/picture'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/glf',
      name: 'glf'
    },
    {
      path: '/about',
      name: 'about'
    },
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
        },
        {
          path: '/odometer',
          name: 'odometer',
          component: odometer
        },
        {
          path: '/tree',
          name: 'tree',
          component: tree
        },
        {
          path: '/boxThree',
          name: 'boxThree',
          component: boxThree
        }
      ]
    }
  ]
})
