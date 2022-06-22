<template>
  <div id="glf">
    <el-form
      :model="searchForm"
      ref="searchForm"
      label-width="100px"
      style="display: flex;flex-wrap: wrap;"
    >
      <el-form-item
        v-for="(item, index) in tableTitleKey"
        :key="index"
        v-if="item.search"
        :prop="item.value"
        :label="item.label"
        style="width: 300px;"
      >
        <el-input v-if="item.type === 'input'" v-model="searchForm[item.value]"></el-input>
        <el-select v-if="item.type === 'select'" v-model="searchForm[item.value]" placeholder="请选择">
          <el-option
            v-for="item in item.selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSearch('searchForm')">搜索</el-button>
        <el-button @click="resetSearch('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-button @click="addClick" type="primary" size="small">新增</el-button>

    <el-table
      :data="tableData"
      :loading="tableLoading"
      border
      style="width: 100%">
      <el-table-column
        label="序号"
        type="index"
        width="50"
      >
      </el-table-column>

      <el-table-column
        v-for="(title, key) in tableTitleKey"
        :key="key"
        :prop="title.value"
        :label="title.label"
      >
        <template slot-scope="scope">
          <div v-if="typeof scope.row[title.value] === 'string'">
            {{ scope.row[title.value] }}
          </div>
          <div v-if="scope.row[title.value].slotText && scope.row[title.value].slotText"
               v-html="scope.row[title.value].slotText"></div>
          <div v-if="scope.row[title.value].slotText && !scope.row[title.value].slotText" >
            {{ scope.row[title.value].default }}
          </div>
        </template>
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="modifyClick(scope.row, scope.$index)" type="text" size="small">编辑</el-button>
          <el-button @click="delClick(scope.row, scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="currentConfig.pageSizes"
      :page-size="currentConfig.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableTotal">
    </el-pagination>

    <el-dialog
      :title="tableTitle"
      :visible.sync="tableDialog"
      width="30%"
    >
      <el-form :model="dialogForm" :rules="dialogRules" ref="dialogForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          v-for="(item, index) in tableTitleKey"
          :key="index"
          v-if="formStatus(item)"
          :prop="item.value"
          :label="item.label"
          style="width: 300px;"
        >
          <el-input v-if="item.type === 'input'" v-model="dialogForm[item.value]" :disabled="disStatus"></el-input>
          <el-select v-if="item.type === 'select'" v-model="dialogForm[item.value]" placeholder="请选择">
            <el-option
              v-for="item in item.selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="tableDialog = false">取 消</el-button>
        <el-button type="primary" @click="dialogSubmit('dialogForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ele-table',
  data () {
    return {
      tableLoading: false,
      tableDialog: false,
      tableTitle: '',
      modifyIndex: 1,
      currentConfig: {
        pageSizes: [10, 20, 30, 40],
        pageSize: 10,
        currentPage: 1
      },
      searchForm: {},
      dialogForm: {},
      tableData: [
        {
          name: 'glf',
          sex: {
            default: 1,
            slotText: '男'
          }
        },
        {
          name: 'test',
          sex: {
            default: 2,
            slotText: `<span style="color: red;">女</span>`
          }
        }
      ]
    }
  },
  methods: {
    /**
     * dialog form
     */
    dialogSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.dialogForm)
          if (this.tableTitle === '新增') {
            this.tableData.push(this.dialogForm)
          }
          if (this.tableTitle === '编辑') {
            for (const dialogFormKey in this.dialogForm) {
              this.tableData[this.modifyIndex][dialogFormKey] = this.dialogForm[dialogFormKey]
            }
          }
          this.tableDialog = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    clearForm () {
      for (const dialogFormKey in this.dialogForm) {
        this.dialogForm[dialogFormKey] = ''
      }
    },
    formStatus (item) {
      if (this.tableTitle === '新增' || this.tableTitle === '查看') {
        return item.add
      } else if (this.tableTitle === '编辑') {
        return item.modify
      }
    },
    /**
    * table button methods
    */
    handleClick (row) {
      this.tableDialog = true
      this.tableTitle = '查看'
      this.tableTitleKey.forEach(e => {
        for (const key in row) {
          if (e.value === key) {
            this.dialogForm[key] = row[key]
          }
        }
      })
    },
    modifyClick (row, index) {
      this.tableDialog = true
      this.tableTitle = '编辑'
      this.modifyIndex = index
      const modifyObj = JSON.parse(JSON.stringify(row))
      for (const modifyObjKey in modifyObj) {
        this.$set(this.dialogForm, modifyObjKey, modifyObj[modifyObjKey])
      }
    },
    addClick () {
      this.tableDialog = true
      this.tableTitle = '新增'
      this.clearForm()
    },
    delClick (row, index) {
      this.$confirm('此操作将删除此数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.tableData.splice(index, 1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    /**
     * 分页
     */
    handleSizeChange (val) {
      this.currentConfig.pageSize = val
    },
    handleCurrentChange (val) {
      this.currentConfig.currentPage = val
    },

    /**
     * search form
     * @param formName
     */
    submitSearch (formName) {
      var params = {
        ...this.searchForm,
        currentPage: this.currentConfig.currentPage,
        pageSize: this.currentConfig.pageSize
      }
      console.log(params)
    },
    resetSearch (formName) {
      this.$refs[formName].resetFields()
    }
  },
  computed: {
    tableTotal () {
      return Number(this.tableData.length)
    },
    tableTitleKey () {
      var arr = [
        {
          label: '姓名',
          value: 'name',
          type: 'input',
          search: true,
          add: true,
          modify: true
        },
        {
          label: '性别',
          value: 'sex',
          type: 'select',
          search: true,
          add: true,
          modify: true,
          selectOptions: [
            {
              value: '男',
              label: '男'
            }, {
              value: '女',
              label: '女'
            }
          ]
        }
      ]
      return arr
    },
    dialogRules () {
      var obj = {}
      this.tableTitleKey.forEach(e => {
        obj[e.value] = [
          { required: true, message: '请输入', trigger: 'blur' }
        ]
      })
      return obj
    },
    disStatus () {
      if (this.tableTitle === '查看') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>
