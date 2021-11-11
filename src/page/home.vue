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
          id: 1,
          name: '弹窗',
          path: '/dialogCall',
          url: `../assets/logo.png`
        },
        {
          id: 2,
          name: '传图',
          path: '/pictureCall',
          url: `../assets/logo.png`
        },
        {
          id: 3,
          name: '摄像',
          path: '/cameraCall',
          url: `../assets/logo.png`
        },
        {
          id: 4,
          name: '扫码',
          path: '/ScanningCall',
          url: `../assets/logo.png`
        },
        {
          id: 5,
          name: 'AES',
          path: '/AES',
          url: `../assets/logo.png`
        },
        {
          id: 6,
          name: 'RSA',
          path: '/RSACall',
          url: `../assets/logo.png`
        },
        {
          id: 7,
          name: 'DES',
          path: '/DESCall',
          url: `../assets/logo.png`
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
          id: 11,
          name: '富文本',
          path: '/tinymce',
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
