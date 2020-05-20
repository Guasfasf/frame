<template>
  <div>
    <Cutting @imgupload="imgupload" ref="myCutting"></Cutting>
  </div>
</template>

<script>
import Cutting from '../components/Cutting/index'
export default {
  name: 'pictureCall',
  components: {
    Cutting
  },
  methods: {
    // 上传图片
    imgupload (currentPic) {
      console.log('imgupload ===', currentPic)
    }
  }
}
</script>

<style scoped>

</style>
