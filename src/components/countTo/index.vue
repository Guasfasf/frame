<template>
  <vue-count-to v-bind="countProps"></vue-count-to>
</template>
<script>
import VueCountTo from 'vue-count-to'

export default {
  name: 'count-to',
  components: {
    VueCountTo
  },
  props: {
    val: {
      required: true,
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    countProps () {
      return {
        startVal: 0,
        endVal: this.parseInt(this.val),
        duration: 2000
      }
    },
    parseInt () {
      return s => {
        if (typeof s === 'string') {
          return parseInt(s)
        }
        return s
      }
    }
  }
}
</script>
<style scoped>
</style>
