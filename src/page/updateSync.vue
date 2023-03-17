<template>
  <div v-if="visible">
    props.sync使用方法{{testtext}}
    <button @click="textUP">更改父级文字</button>
    <button @click="close">更改父级状态 - 关闭</button>
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
