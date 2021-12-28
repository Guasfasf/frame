<template>
  <div class="tip-list-box">
    <div id="tableScroll">
      <div class="tip-list" v-for="(label,id) in taskList" :key="id">
        <div class="tip-title-wrap-box">
          <div class="tip-icon"></div>
          <div>
            <div class="tip-title-wrap-box">
              <p class="tip-title">{{ label.ptname }}</p>
            </div>
            <div class="tip-detail">
              <span>湿度：78%</span>
              <span>温度：高</span>
            </div>
          </div>
        </div>
        <div class="tip-time">
          <p class="tip-times">{{ label.fssj }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listScroll',
  data () {
    return {
      taskList: [
        {
          ptname: '#1 配电室西北温湿度（奥体公园2开闭站3-1）',
          fssj: '2021-01-11  19:23:11'
        }, {
          ptname: '#2 配电室西北温湿度（奥体公园2开闭站3-1）',
          fssj: '2021-01-11  19:23:11'
        }, {
          ptname: '#3 配电室西北温湿度（奥体公园2开闭站3-1）',
          fssj: '2021-01-11  19:23:11'
        }, {
          ptname: '#4 配电室西北温湿度（奥体公园2开闭站3-1）',
          fssj: '2021-01-11  19:23:11'
        }
      ]
    }
  },
  mounted () {
    this.tipInit()
  },
  methods: {
    tipInit () {
      this.$nextTick(function () {
        this.tableScroll('tableScroll', 40, 2)
      })
    },
    tableScroll (tableid, speed, len) {
      clearTimeout(this.timer)
      const tableElement = document.getElementById(tableid)
      tableElement.style.marginTop = '0px'
      if (tableElement.querySelectorAll('.tip-list').length > len) {
        tableElement.style.top = 0
        tableElement.style.zIndex = 1

        const outSetHeight = tableElement.querySelectorAll('.tip-list')[0].offsetHeight
        const maxHeight = outSetHeight * tableElement.querySelectorAll('.tip-list').length
        tableElement.style.marginTop = '0px'
        let tblTop = 0
        const Marqueehq = () => {
          if (tblTop <= -maxHeight) {
            tblTop = 0
          } else {
            tblTop -= 1
          }
          tableElement.style.marginTop = tblTop + 'px'
          clearTimeout(this.timer)
          this.timer = setTimeout(function () {
            Marqueehq()
          }, speed)
        }

        this.timer = setTimeout(Marqueehq, speed)
        tableElement.addEventListener('mouseover', (event) => {
          clearTimeout(this.timer)
        })
        tableElement.addEventListener('mouseout', (event) => {
          clearTimeout(this.timer)
          tableElement.style['z-index'] = 1
          if (tableElement.querySelectorAll('.tip-list').length > len) {
            this.timer = setTimeout(Marqueehq, speed)
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
  .tip-list-box{
    /*height: 200px;*/
    /*overflow: auto;*/
  }
  .tip-list{
    padding: 23px 0 11px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    .tip-icon{
      width: 10px;
      height: 10px;
      background: #1ACEFF;
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 6px;
    }
    .tip-title-wrap-box{
      display: flex;
    }

    .tip-title{
      /*width: 200px;*/
      height: 24px;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #1ACEFF;
      line-height: 24px;
      margin-right: 15px;
    }
    .tip-detail{
      color: #ffffff;
      margin-top: 20px;
      span{
        margin-right: 20px;
      }
    }

    .tip-time{
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #456076;
      line-height: 24px;
      .tip-times{
        margin-right: 32px;
      }
    }
  }
</style>
