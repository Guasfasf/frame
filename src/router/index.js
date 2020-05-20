import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import dialogCall from '../page/dialogCall'
import pictureCall from '../page/pictureCall'
import cameraCall from '../page/cameraCall'
import ScanningCall from '../page/ScanningCall'
import RSACall from '../page/RSACall'
import DESCall from '../page/DESCall'
import apiCall from '../page/apiCall'

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
        }
      ]
    }
  ]
})
