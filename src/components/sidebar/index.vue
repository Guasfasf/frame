<template>
  <el-container class="container">
    <el-menu
        router
        style="width:200px;height: 100%;"
    >
      <sidebar-item :menus="menus"></sidebar-item>
    </el-menu>
    <el-main class="main">
      <div v-if="$route.path === '/'" style="height: 100%;overflow: auto;">
        <h1>hello word</h1>
        <div style="height: 1000px;background: #1ACEFF;"></div>
      </div>
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
  /deep/ .el-main{

  }
  .main{
    width: calc(100% - 200px) !important;
  }
</style>
