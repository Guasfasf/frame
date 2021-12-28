<template>
  <div>
    <Cutting @imgupload="imgupload" ref="myCutting"></Cutting>
    <el-button id="dropTarget" @click="upload">大文件断点续传</el-button>
  </div>
</template>

<script>
import Cutting from '@/components/Cutting/index'
export default {
  name: 'pictureCall',
  components: {
    Cutting
  },
  mounted () {
    // 文件选择后的回调
    this.$bus.$on('fileAdded', () => {
      console.log('文件已选择')
    })
    // 文件上传成功的回调
    this.$bus.$on('fileSuccess', () => {
      console.log('文件上传成功')
    })
  },
  methods: {
    upload () {
      // 打开文件选择框
      this.$bus.$emit('openUploader', {
        // 传入的参数
        // id: 'glf'
      })
    },
    // 上传图片
    imgupload (currentPic) {
      console.log('imgupload ===', currentPic)
    }
  },
  destroyed () {
    this.$bus.$off('fileAdded')
    this.$bus.$off('fileSuccess')
  }
}
</script>

<style scoped>

</style>
