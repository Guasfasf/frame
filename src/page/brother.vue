<template>
  <div>
    <brother></brother>
    <younger></younger>
  </div>
</template>

<script>
import brother from '../components/brother'
import younger from '../components/younger'
export default {
  name: 'brothers',
  components: {
    brother,
    younger
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
    /* bus.js 兄弟组件传值方法 */
    bus (item) {
      console.log('brothers ===', item)
    }
  }
}
</script>

<style scoped>

</style>
