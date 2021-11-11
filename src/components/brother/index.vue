<template>
  <div>
    组件1：{{title}}
    <button @click="one">组件1赋值给组件2</button>
    父组件: {{test}}
    <button @click="two">直接获取父组件data并改变值</button>
  </div>
</template>

<script>
export default {
  name: 'brother',
  inject: ['father'],
  data () {
    return {
      title: 1,
      test: 0
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
