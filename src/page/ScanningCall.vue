<template>
  <div>
    <h1>如果没有选定输入框是无法将扫码得到的结果赋值到输入框内显示</h1>
    <el-input v-model="barCode" v-focusCursor size="small"  @keyup.enter.native="payCode" ></el-input>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      barCode: ''
    }
  },
  methods: {
    payCode () {}
  }
}
</script>
<style lang="less">
</style>
