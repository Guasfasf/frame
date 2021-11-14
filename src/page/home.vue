<template>
  <sidebar :menus="menus"></sidebar>
</template>

<script>
import sidebar from '../components/sidebar/index'
export default {
  name: 'home',
  components: {
    sidebar
  },
  data () {
    return {
      menus: [
        {
          name: '插件',
          path: '插件',
          children: [
            {
              name: '弹窗',
              path: '/dialogCall',
              url: `../assets/logo.png`
            },
            {
              name: '传图',
              path: '/pictureCall',
              url: `../assets/logo.png`
            },
            {
              name: '摄像',
              path: '/cameraCall',
              url: `../assets/logo.png`
            },
            {
              name: '扫码',
              path: '/ScanningCall',
              url: `../assets/logo.png`
            },
            {
              name: '富文本',
              path: '/tinymce',
              url: `../assets/logo.png`
            }
          ]
        },
        {
          name: '加解密',
          path: '加解密',
          children: [
            {
              name: 'AES',
              path: '/AES',
              url: `../assets/logo.png`
            },
            {
              name: 'RSA',
              path: '/RSACall',
              url: `../assets/logo.png`
            },
            {
              name: 'DES',
              path: '/DESCall',
              url: `../assets/logo.png`
            }
          ]
        },
        {
          id: 8,
          name: 'API',
          path: '/apiCall',
          url: `../assets/logo.png`
        },
        {
          id: 9,
          name: '落球',
          path: '/ballDrop',
          url: `../assets/logo.png`
        },
        {
          id: 10,
          name: '传值',
          path: '/brother',
          url: `../assets/logo.png`
        },

        {
          id: 12,
          name: '图表',
          path: '/echarts',
          url: `../assets/logo.png`
        },
        {
          id: 13,
          name: 'SVG',
          path: '/SVG',
          url: `../assets/logo.png`
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
