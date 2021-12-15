
<template>
  <div id="app">
    <router-view/>
    <global-uploader></global-uploader>
  </div>
</template>

<script>
import globalUploader from '@/components/uploader/GlobalUploader.vue'
export default {
  name: 'App',
  components: {
    globalUploader
  },
  /* 监听30分钟无操作状态时间 */
  mounted () {
    // window.onload = function () {
    //   window.document.onmousedown = function () {
    //     localStorage.setItem('lastTime', new Date().getTime())
    //   }
    // }
    // window.addEventListener('keyup', this.handleKeyup)
    // window.addEventListener('scroll', this.handleScroll)
    // window.setInterval(this.checkTimeout, 30000)
  },
  methods: {
    checkTimeout () {
      var lastTime = new Date().getTime()
      var currentTime = new Date().getTime()
      var timeOut = 30 * 60 * 1000 // 设置超时时间： 30分
      currentTime = new Date().getTime() // 更新当前时间
      lastTime = localStorage.getItem('lastTime')
      if (Number(currentTime) - Number(lastTime) > Number(timeOut)) { // 判断是否超时
        // var url = window.location.href
        // var newUrl = url.match(/(\S*)#/)[1]
        // window.open(newUrl + '#/login', '_self')
        alert('超时了')
      }
    },
    // 键盘事件
    handleKeyup (event) {
      // const e = event || window.event || arguments.callee.caller.arguments[0]
      const e = event || window.event
      if (!e) return
      // const {key, keyCode} = e
      // console.log('keyCode ==', keyCode)
      // console.log('key ==', key)
      localStorage.setItem('lastTime', new Date().getTime())
    },
    //  滑轮事件
    handleScroll () {
      var e = document.body.scrollTop || document.documentElement.scrollTop
      if (!e) return
      localStorage.setItem('lastTime', new Date().getTime())
    }
  },
  // 移除监控
  destroyed () {
    window.removeEventListener('keyup', this.handleKeyup)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  ul li{
    list-style-type:none;
  }
  .hand{
    cursor:pointer;
  }
  .el-main{
    margin: 0;padding: 0;
  }
  .el-menu-item{
    padding:0 10px !important;
  }
</style>
