<template>
  <div>
    <button @click="login">调用api</button>
    <button @click="down">代理跨域批量下载</button>
  </div>
</template>

<script>
import { login } from '@/api/login'
import axios from 'axios'

export default {
  name: 'apiCall',
  data () {
    return {
      area: [
        // {'name': '上海', 'url': '/asset/get/s/data-1482909900836-H1BC_1WHg.json'},
        // {'name': '河北', 'url': '/asset/get/s/data-1482909799572-Hkgu_yWSg.json'},
        // {'name': '山西', 'url': '/asset/get/s/data-1482909909703-SyCA_JbSg.json'},
        // {'name': '内蒙古', 'url': '/asset/get/s/data-1482909841923-rkqqdyZSe.json'},
        // {'name': '辽宁', 'url': '/asset/get/s/data-1482909836074-rJV9O1-Hg.json'},
        // {'name': '吉林', 'url': '/asset/get/s/data-1482909832739-rJ-cdy-Hx.json'},
        // {'name': '黑龙江', 'url': '/asset/get/s/data-1482909803892-Hy4__J-Sx.json'},
        // {'name': '江苏', 'url': '/asset/get/s/data-1482909823260-HkDtOJZBx.json'},
        // {'name': '浙江', 'url': '/asset/get/s/data-1482909960637-rkZMYkZBx.json'},
        // {'name': '安徽', 'url': '/asset/get/s/data-1482909768458-HJlU_yWBe.json'},

        // {'name': '福建', 'url': '/asset/get/s/data-1478782908884-B1H6yezWe.json'},
        // {'name': '江西', 'url': '/asset/get/s/data-1482909827542-r12YOJWHe.json'},
        // {'name': '山东', 'url': '/asset/get/s/data-1482909892121-BJ3auk-Se.json'},
        // {'name': '河南', 'url': '/asset/get/s/data-1482909807135-SJPudkWre.json'},
        // {'name': '湖北', 'url': '/asset/get/s/data-1482909813213-Hy6u_kbrl.json'},
        // {'name': '湖南', 'url': '/asset/get/s/data-1482909818685-H17FOkZSl.json'},
        // {'name': '广东', 'url': '/asset/get/s/data-1482909784051-BJgwuy-Sl.json'},
        // {'name': '广西', 'url': '/asset/get/s/data-1482909787648-SyEPuJbSg.json'},
        // {'name': '海南', 'url': '/asset/get/s/data-1482909796480-H12P_J-Bg.json'},
        // {'name': '四川', 'url': '/asset/get/s/data-1482909931094-H17eKk-rg.json'},

        // {'name': '贵州', 'url': '/asset/get/s/data-1482909791334-Bkwvd1bBe.json'},
        // {'name': '云南', 'url': '/asset/get/s/data-1482909957601-HkA-FyWSx.json'},
        // {'name': '西藏', 'url': '/asset/get/s/data-1482927407942-SkOV6Qbrl.json'},
        // {'name': '陕西', 'url': '/asset/get/s/data-1482909918961-BJw1FyZHg.json'},
        // {'name': '甘肃', 'url': '/asset/get/s/data-1482909780863-r1aIdyWHl.json'},
        // {'name': '青海', 'url': '/asset/get/s/data-1482909853618-B1IiOyZSl.json'},
        // {'name': '宁夏', 'url': '/asset/get/s/data-1482909848690-HJWiuy-Bg.json'},
        // {'name': '新疆', 'url': '/asset/get/s/data-1482909952731-B1YZKkbBx.json'},
        // {'name': '北京', 'url': '/asset/get/s/data-1482818963027-Hko9SKJrg.json'},
        // {'name': '天津', 'url': '/asset/get/s/data-1482909944620-r1-WKyWHg.json'},
        //
        {'name': '重庆', 'url': '/asset/get/s/data-1482909775470-HJDIdk-Se.json'},
        {'name': '香港', 'url': '/asset/get/s/data-1461584707906-r1hSmtsx.json'},
        {'name': '澳门', 'url': '/asset/get/s/data-1482909771696-ByVIdJWBx.json'}
      ]
    }
  },
  methods: {
    login () {
      // this.$store
      let params = {}
      login(params).then(res => {
        console.log(res)
      })
    },
    down () {
      this.area.forEach(e => {
        axios({
          // url: '/api/asset/get/s/data-1482909952731-B1YZKkbBx.json',
          url: `/api${e.url}`,
          method: 'get'
        }).then((res) => {
          const a = document.createElement('a')
          var strMatch = e.url
          // 返回值以data开始到json结束
          var matchReg = /data.*?\.json/
          a.download = strMatch.match(matchReg)[0]
          const fileUrl = JSON.stringify(res.data)
          const blob = new Blob([fileUrl])
          const objectUrl = URL.createObjectURL(blob)
          a.setAttribute('href', objectUrl)
          a.click()
        }).catch((err) => {
          console.log(err)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
