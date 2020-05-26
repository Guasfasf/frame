<template>
  <div>
    组件2：{{title}}
    <button @click="one">组件2赋值给组件1</button>
  </div>
</template>

<script>
export default {
  name: 'younger',
  data () {
    return {
      title: 2
    }
  },
  /* 拿到组件传值事件 */
  created () {
    this.$bus.on('addTwo', this.bus)
  },
  /* 销毁组件传值事件 */
  beforDestroy () {
    this.$bus.off('addTwo', this.bus)
  },
  methods: {
    /* 传给组件1 */
    one () {
      const num = this.title++
      this.$bus.emit('addOne', num)
    },
    /* 获取到组件1传过来的值 */
    bus (item) {
      console.log('组件2  ====', item)
      this.title = item
    }
  }
}
</script>

<style scoped>

</style>
