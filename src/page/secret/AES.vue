<template>
  <div>
    <input type="text" placeholder="请输入加密文本" v-model="texts"><br><br>
    <button @click="encryption">点击加密</button>
    <br>
    <br>
    <h1>这里是AES加密后的文本：</h1>
    <div>{{encryptionText}}</div>.
    <br>
    <br>
    <hr>
    <br>
    <br>
    <br>
    <br>
    <button @click="Decrypt">点击解密</button>
    <br>
    <br>
    <h1>这里是AES解密后的结果：</h1>
    <div>{{DecryptText}}</div>
  </div>
</template>

<script>
export default {
  name: 'AES',
  data () {
    return {
      AESkey: '123',
      texts: '',
      encryptionText: '',
      DecryptText: ''
    }
  },
  methods: {
    encryption () {
      let key = this.AESkey
      let str = this.texts
      this.encryptionText = this.$Gmethods.encryptAES(JSON.stringify(str), key)
    },
    Decrypt () {
      let data = this.encryptionText
      let key2 = this.AESkey
      this.DecryptText = this.$Gmethods.decryptAES(data, key2)
    }
  }
}
</script>

<style scoped>

</style>
