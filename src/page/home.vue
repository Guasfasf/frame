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
          name: 'test',
          path: '/test',
          url: `../assets/logo.png`
        },
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
              name: '上传',
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
            },
            {
              name: '创建打印',
              path: '/print',
              url: `../assets/logo.png`
            },
            {
              name: '文字切换',
              path: '/odometer',
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
          name: '自动滚动',
          path: '自动滚动',
          children: [
            {
              name: '表格',
              path: '/tableScroll'
            },
            {
              name: '列表滚动',
              path: '/listScroll'
            }
          ]
        },
        {
          name: 'Node',
          path: 'Node',
          children: [
            {
              name: '用户信息',
              path: '/userInfo'
            },
            {
              name: '图片数据',
              path: '/Picture'
            }
          ]
        },
        {
          name: 'three3D',
          path: 'three3D',
          children: [
            {
              name: '种植vue',
              path: '/tree'
            },
            {
              name: '圆、方',
              path: '/boxThree'
            }
          ]
        },
        {
          name: 'autoTable',
          path: 'autoTable',
          children: [
            {
              name: 'ele生成表格',
              path: '/autoTable'
            }
          ]
        },
        {
          name: 'API',
          path: '/apiCall',
          url: `../assets/logo.png`
        },
        {
          name: '落球',
          path: '/ballDrop',
          url: `../assets/logo.png`
        },
        {
          name: '传值',
          path: '/brother',
          url: `../assets/logo.png`
        },
        {
          name: '图表',
          path: '/echarts',
          url: `../assets/logo.png`
        },
        {
          name: 'SVG',
          path: '/SVG',
          url: `../assets/logo.png`
        },
        {
          name: '伪类tab',
          path: '/tabWl',
          url: `../assets/logo.png`
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
