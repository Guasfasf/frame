<template>
  <div>
    组件1：{{title}}
    <button @click="one">组件1赋值给组件2</button>
  </div>
</template>

<script>
export default {
  name: 'brother',
  data () {
    return {
      title: 1
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
    }
  }
}
</script>

<style scoped>

</style>
