<template>
  <div>
    <button @click="dialogTrue('success')">点击显示成功弹窗</button>
    <button @click="dialogTrue('error')">点击显示失败弹窗</button>
    <YZdialog :dialogVisible="dialogVisible" dialogType="success" @closeDiaLog="closeDiaLog">
      <template slot="slotDiaLogBody">
        上传成功，添加成功，删除成功
      </template>
    </YZdialog>
    <YZdialog :dialogVisible="dialogVisibleError" dialogType="error" @closeXDialog="closeXDialog">
      <template slot="slotDiaLogBody">
        <div>
          <p>失败原因</p>
          <p>失败原因</p>
          <p>失败原因</p>
        </div>
      </template>
    </YZdialog>
  </div>
</template>

<script>
import YZdialog from '../components/YZdialog/YZdialog'
export default {
  data () {
    return {
      dialogVisible: false,
      dialogVisibleError: false
    }
  },
  components: {
    YZdialog
  },
  methods: {
    dialogTrue (item) {
      switch (item) {
        case 'success':
          this.dialogVisible = true
          return
        case 'error':
          this.dialogVisibleError = true
      }
    },
    closeDiaLog () {
      this.dialogVisible = false
    },
    closeXDialog () {
      this.dialogVisibleError = false
    }
  }
}
</script>

<style scoped>
</style>
