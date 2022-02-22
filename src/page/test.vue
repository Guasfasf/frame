<template>
  <div v-if="visible">
    测试dom{{testtext}}
    <button @click="textUP">文字更改</button>
    <button @click="close">关闭</button>
  </div>
</template>

<script>
export default {
  props: {
    visible: false,
    testtext: {
      type: String,
      default: '0'
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    textUP () {
      this.$emit('update:testtext', '2')
    }
  }
}
</script>

<style scoped>

</style>
