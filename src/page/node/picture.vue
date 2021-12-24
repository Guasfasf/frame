<template>
  <div>
    <h2 @click='swiper'>通过node.js请求数据</h2>
    <img v-for="(item, index) in slider" :key="index" :src="item" alt="" style="width: 100%;height: auto;">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  methods: {
    swiper () {
      this.$store.dispatch('getSliders')
    }
  },
  computed: {
    ...mapGetters(['slider'])
  }
}
</script>

<style scoped>

</style>
