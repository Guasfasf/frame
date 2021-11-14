<template>
  <el-container class="container">
    <el-menu
        router
        style="width:200px;height: 100%;"
    >
      <sidebar-item :menus="menus"></sidebar-item>
    </el-menu>
    <el-main class="main">
      <router-view style="height: 100%;overflow: auto;"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import sidebarItem from './sidebar-item'
export default {
  name: 'home',
  components: {
    sidebarItem
  },
  data () {
    return {
    }
  },
  props: {
    menus: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
</style>
