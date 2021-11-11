<template>
  <div>
    <button @click="login">调用api</button>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'apiCall',
  methods: {
    login () {
      // this.$store
      let params = {}
      login(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
