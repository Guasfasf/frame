<template>
  <div>
    <button @click="dialogTrue('success')">点击显示成功弹窗</button>
    <button @click="dialogTrue('error')">点击显示失败弹窗</button>
    <button @click="successMessage">点击success message</button>
    <button @click="errorMessage">点击error message</button>
    <Gdialog :dialogVisible="dialogVisible" dialogType="success" @closeDiaLog="closeDiaLog">
      <template slot="slotDiaLogBody">
        上传成功，添加成功，删除成功
      </template>
    </Gdialog>
    <Gdialog :dialogVisible="dialogVisibleError" dialogType="error" @closeXDialog="closeXDialog">
      <template slot="slotDiaLogBody">
        <div>
          <p>失败原因</p>
          <p>失败原因</p>
          <p>失败原因</p>
        </div>
      </template>
    </Gdialog>
  </div>
</template>

<script>
import Gdialog from '@/components/Gdialog/Gdialog'
export default {
  data () {
    return {
      dialogVisible: false,
      dialogVisibleError: false
    }
  },
  components: {
    Gdialog
  },
  methods: {
    successMessage () {
      this.$Gmessage({
        message: 'success 提示语',
        type: 'success'
      })
    },
    errorMessage () {
      this.$Gmessage({
        message: 'error  提示语',
        type: 'error',
        key: 'useragreement'
      })
    },
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
