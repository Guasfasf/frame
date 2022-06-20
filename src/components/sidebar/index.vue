<template>
  <el-container class="container">
    <el-menu
        router
        style="width:200px;height: 100vh;overflow: auto;"
    >
      <sidebar-item :menus="menus"></sidebar-item>
    </el-menu>
    <el-main class="main">
      <div v-if="$route.path === '/'">
        <h1>hello word</h1>
        <div id="glf">
          template:
          <!--    <test-demo level="11">-->
          <!--    </test-demo>\-->
          <!--    <test></test>-->
          render:
          <test-demo level=1>
            <p>Alley1</p>
          </test-demo>
          <test-demo level=2>
            <p>Alley2</p>
          </test-demo>
        </div>
        <div style="height: 1000px;background: #1ACEFF;"></div>
      </div>
      <router-view style="height: 100%;overflow: auto;"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import sidebarItem from './sidebar-item'
import { test } from './render'
export default {
  name: 'home',
  components: {
    sidebarItem,
    test
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
    height: 95vh;
    overflow: auto;
  }
</style>
