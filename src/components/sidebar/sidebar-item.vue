<template>
  <div>
    <template v-for="item in menus">
      <el-submenu
        v-if="item.children"
        :index="item[pathKey]"
        :key="item[labelKey]"
      >
        <template slot="title">
          <span>{{ item.name }}</span>
        </template>
        <template v-for="(child, cindex) in item.children">
          <sidebar-item
            v-if="child.children"
            :menu="[child]"
            :key="cindex"
          ></sidebar-item>
          <el-menu-item
            v-else
            :index="child[pathKey],cindex"
            :key="child[labelKey]">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ child.name }}</span>
          </el-menu-item>

        </template>
      </el-submenu>
      <el-menu-item
        v-else
        :index="item[pathKey]"
        :key="item[labelKey]"
      >
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sidebar-item',
  props: {
    menus: {
      type: Array
    }
  },
  data () {
    return {
      config: {
        label: 'label',
        path: 'path',
        icon: 'icon',
        children: 'children'
      }
    }
  },
  computed: {
    labelKey () {
      return this.config.label
    },
    pathKey () {
      return this.config.path
    }
  }
}
</script>

<style scoped>

</style>
