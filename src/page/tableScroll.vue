<template>
  <div>
    <el-table
      ref="table"
      height="300"
      :data="tableData"
    >
      <el-table-column
        type="index"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'tableScroll',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted () {
    this.tableScroll('table')
  },
  methods: {
    tableScroll (item) {
      // 拿到表格挂载后的真实DOM
      const table = this.$refs[item]
      // 拿到表格中承载数据的div元素
      const divData = table.bodyWrapper
      // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
      setInterval(() => {
        // 元素自增距离顶部1像素
        divData.scrollTop += 1
        // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
        if (divData.clientHeight + divData.scrollTop === divData.scrollHeight) {
          // 重置table距离顶部距离
          divData.scrollTop = 0
        }
      }, 100)
    }
  }
}
</script>

<style scoped>

</style>
