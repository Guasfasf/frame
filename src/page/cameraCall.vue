<template>
  <div>
    <camera @refreshDataList="refreshDataList"></camera>
  </div>
</template>

<script>
import camera from '../components/camera/index'

export default {
  name: 'cameraCall',
  components: {
    camera
  },
  methods: {
    refreshDataList (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>

</style>
