<template>
  <div ref="print">
    顾GG
    <el-button
      class="no-print"
      style="z-index: 3000;position: fixed;right:50px;bottom:50px;"
      type="primary"
      @click="handlePrint"
    >打印</el-button>
  </div>
</template>

<script>
export default {
  name: 'print',
  methods: {
    handlePrint () {
      this.$print(this.$refs.print, {'no-print': '.no-print'})
    }
  }
}
</script>

<style scoped>

</style>
