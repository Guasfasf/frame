<template>
  <div>
    {{format}}
    <IOdometer ref="test" v-if="status" id="iOdometer" class="iOdometer" :value="num" :format="format"/>
    <div style="width: 100px;height: 100px;"><count-to :val="num"/></div>
    <button @click="handTest">点击改变样式</button>
    <button @click="test">点击+1</button>
    <button @click="testformat">点击改变format</button>
  </div>
</template>

<script type="text/babel">
import IOdometer from 'vue-odometer'
import 'odometer/themes/odometer-theme-default.css'
import countTo from '@/components/countTo/index'
export default {
  name: 'view',
  components: {
    IOdometer,
    countTo
  },
  data () {
    return {
      num: 999.90,
      format: '(,ddd).dd',
      status: true
    }
  },
  mounted () {
    // this.test()
  },
  methods: {
    handTest () {
      const id = document.getElementById('iOdometer')
      const digit = id.getElementsByClassName('odometer-digit')
      console.log(digit)
      digit[0].style = 'border: 1px solid red;'
    },
    test () {
      const that = this
      that.num += 1
      // setInterval(function () {
      //   that.num += 1
      // }, 5000)
    },
    testformat () {
      setTimeout(() => {
        this.format = '(,ddd)'
        this.num = 998.8
        // console.log(this.$refs.test)
        this.$refs.test.instance.update(this.num)
      })
    }
  }
}
</script>

<style scoped>
.iOdometer {
  font-size: 2em;
  margin: 0;
}
/deep/ .odometer-inside {
}

/deep/ .odometer-digit {
  width: 30px;
  height: 35px;
  line-height: 35px;
  /*border: 1px solid rgb(16, 169, 235);*/
  border-radius: 5px;
  margin: 0 4px;
}
/deep/ .odometer-value{
  width: 100% !important;
}

</style>
