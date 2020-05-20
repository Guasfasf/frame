<template>
  <div>
    <input type="text" placeholder="请输入加密key" v-model="keys"><br><br>
    <input type="text" placeholder="请输入加密文本" v-model="texts"><br><br>
    <button @click="encryptDES">点击加密</button>
    <br>
    <br>
    <h1>这里是DES加密后的文本：</h1>
    <div>{{encryptionText}}</div>.
    <br>
    <br>
    <hr>
    <br>
    <br>
    <input type="text" placeholder="请输入解密key" v-model="keys">
    <br>
    <br>
    <button @click="decryptDES">点击解密</button>
    <br>
    <br>
    <h1>这里是DES解密后的结果：</h1>
    <div>{{DecryptText}}</div>
  </div>
</template>

<script>
export default {
  name: 'DES',
  data () {
    return {
      keys: '12345678',
      texts: '',
      encryptionText: '',
      DecryptText: ''
    }
  },
  methods: {
    encryptDES () {
      let str = this.texts
      let key = this.keys
      this.encryptionText = this.$YZmethods.encryptDES(str, key)
    },
    decryptDES () {
      let key = this.keys
      let str = this.encryptionText
      this.DecryptText = this.$YZmethods.decryptDES(str, key)
    }
  }
}
</script>

<style scoped>

</style>
