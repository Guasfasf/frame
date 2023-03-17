<template>
  <div>
    <brother></brother>
    <younger></younger>
    <button @click="qiankun">乾坤loadMicroApp</button>
    <button @click="unmount">卸载乾坤</button>
    <h2>loadMicroApp</h2>
    <div id="glf" style="width: 100%;height: 300px;border: 1px solid red;overflow: auto;"></div>
<!--    <iframe :src="iframeSrc" frameborder="0" style="width: 90%;height: 100px;border:1px solid red;">-->
<!--      <div id="test-glf">-->
<!--        测试-->
<!--      </div>-->
<!--    </iframe>-->
    <div id="vue" style="width: 100%;height: 300px;border: 1px solid red;overflow: auto;"></div>
  </div>
</template>

<script>
import brother from '../components/brother'
import younger from '../components/younger'
import { loadMicroApp } from 'qiankun'

export default {
  name: 'brothers',
  data () {
    return {
      test: 'glf',
      iframeSrc: 'http://localhost:10000',
      microApp: null
    }
  },
  provide () {
    return {
      father: this
    }
  },
  components: {
    brother,
    younger
  },
  /* 拿到组件传值事件 */
  created () {
    this.unmount()
    this.$bus.on('addTwo', this.bus)
  },
  /* 销毁组件传值事件 */
  beforDestroy () {
    this.$bus.off('addTwo', this.bus)
  },
  methods: {
    /* bus.js 兄弟组件传值方法 */
    bus (item) {
      console.log('brothers ===', item)
    },
    qiankun () {
      this.microApp = loadMicroApp({
        name: 'vueApp', // 应用的名字
        entry: 'http://localhost:10000/about', // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
        container: '#glf' // 要渲染到的容器名id
      })
    },
    unmount () {
      if (this.microApp) {
        this.microApp.unmount() // 卸载微应用
      }
    }
  }
}
</script>

<style scoped>

</style>
