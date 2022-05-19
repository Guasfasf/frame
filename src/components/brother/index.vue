<template>
  <div>
    组件1：{{title}}
    <button @click="one">组件1赋值给组件2</button>
    父组件: {{test}}
    <button @click="two">直接获取父组件data并改变值</button>
    <a href="/glf" target="_blank">test</a>
    <a href="/glf/about" target="_blank">test</a>
    <button @click="qiankun">test</button>
    <div id="glf" style="width: 100px;height: 100px;border:1px solid red;"></div>
    <iframe :src="iframeSrc" frameborder="0" style="width: 100%;height: 100%;border:1px solid red;">
      <div id="test-glf">
        测试
      </div>
    </iframe>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'
export default {
  name: 'brother',
  inject: ['father'],
  data () {
    return {
      title: 1,
      test: 0,
      iframeSrc: 'http://localhost:8080/glf'
    }
  },
  /* 拿到组件传值事件 */
  created () {
    this.$bus.on('addOne', this.bus)
  },
  /* 销毁组件传值事件 */
  beforDestroy () {
    this.$bus.off('addOne', this.bus)
  },
  methods: {
    qiankun () {
      loadMicroApp({
        name: 'glf',
        entry: '//localhost:7105',
        container: '#app'
      })
      window.history.pushState({}, '', '/glf/about')
    },
    /* 传给组件2 */
    one () {
      this.$bus.emit('addTwo', this.title)
    },
    /* 获取组件2传过来的值 */
    bus (item) {
      console.log('组件1  ====', item)
      this.title = item
    },
    two () {
      this.test = this.father.test = 'test'
    }
  }
}
</script>

<style scoped>

</style>
