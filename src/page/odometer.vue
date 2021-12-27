<template>
  <div>
    <IOdometer class="iOdometer" :value="num"/>
    <div style="width: 100px;height: 100px;"><count-to :val="num" /></div>
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
      num: 999999
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    test () {
      const that = this
      setInterval(function () {
        that.num += 1
      }, 5000)
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
  border: 1px solid rgb(16, 169, 235);
  border-radius: 5px;
  margin: 0 4px;
}
/deep/ .odometer-value{
  width: 100% !important;
}

</style>
