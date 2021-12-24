<template>
  <div>
    <h2 @click='reg'>注册</h2>
    <h2 @click='handleClick'>登录</h2>
    <h2 @click='validateClick'>验证登录</h2>
    <h2 @click='logout'>退出登录</h2>
    <div>用户信息：{{ userInfo }}</div>
    <div>用户状态：{{ userStatus }}</div>
    <ptCode id="ptCode1" ref="ptCode1" :identifyCode="identifyCode" @click.native="floorNumber"></ptCode>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ptCode from '@/components/PtCode/PtCode'
import { validate, logout } from '../../api/session'
export default {
  name: 'index',
  data () {
    return {
      identifyCode: '',
      userStatus: {}
    }
  },
  mounted () {
    this.floorNumber()
  },
  components: {
    ptCode
  },
  methods: {
    logout () {
      logout().then(res => {
        this.$store.commit('delUserInfo')
      })
    },
    validateClick () {
      validate().then(res => {
        this.userStatus = res
      })
    },
    // reg
    reg () {
      let obj = {
        username: 'admin',
        password: '123456'
      }
      this.$store.dispatch('reg', obj).then(res => {
        if (res.code === 1) {
          alert(res.error)
        } else
        if (res.code === 0) {
          alert('注册成功')
        }
      })
    },
    // login
    handleClick () {
      let obj = {
        username: 'admin',
        password: '123456'
      }
      this.$store.dispatch('login', obj).then(res => {
        if (res.code === 1) {
          alert(res.error)
        }
      })
    },
    floorNumber () {
      var num = ''
      for (var i = 0; i < 4; i++) {
        num += Math.floor(Math.random() * 10)
      }
      this.identifyCode = num
      this.$refs.ptCode1.drawPic()
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  }
}
</script>

<style scoped>

</style>
