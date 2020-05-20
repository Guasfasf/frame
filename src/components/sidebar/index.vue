<template>
  <el-container class="container">
    <el-container>
      <el-aside width="60">
        <el-menu
          router
          background-color="#181818"
          text-color="#777"
          active-text-color="#fff"
          style="width:60px;height: 100%;"
        >
          <el-menu-item
            class="nav-first"
            v-for="item in menus"
            :index="item.path"
            :key="item.id"
          >
            <!--<img style="width: 28px; height: 28px;margin-bottom: 3px;" :src="item.url">-->
            <span style="color: white;">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view style="height: 100%;overflow: auto;"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
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
