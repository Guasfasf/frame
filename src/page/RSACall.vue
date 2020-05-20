<template>
  <div>
    <input type="text" placeholder="请输入加密key" v-model="keys"><br><br>
    <input type="text" placeholder="请输入加密文本" v-model="texts"><br><br>
    <button @click="encryption">点击加密</button>
    <br>
    <br>
    <h1>这里是RSA加密后的文本：</h1>
    <div>{{encryptionText}}</div>.
    <br>
    <br>
    <hr>
    <br>
    <br>
    <input type="text" placeholder="请输入解密key" v-model="decryptkeys">
    <br>
    <br>
    <button @click="Decrypt">点击解密</button>
    <br>
    <br>
    <h1>这里是RSA解密后的结果：</h1>
    <div>{{DecryptText}}</div>
  </div>
</template>

<script>
export default {
  name: 'RSA',
  data () {
    return {
      keys: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnjOYAJZP9R7WjxtAfy73WhfCw3stIVoekNNfR5jpTClIzyJUejXFoopUNvRkEVGywW4SldS4MQcygrM06M6RLBWjstos5nuqfb+HVDrGsszEd2L2yJ3lszYchush8xzbrZE7QxDKj2NJKaJXSslAEGU6nxCs5FZjshY2b61O8WwIDAQAB',
      decryptkeys: 'MIICXAIBAAKBgQCnjOYAJZP9R7WjxtAfy73WhfCw3stIVoekNNfR5jpTClIzyJUejXFoopUNvRkEVGywW4SldS4MQcygrM06M6RLBWjstos5nuqfb+HVDrGsszEd2L2yJ3lszYchush8xzbrZE7QxDKj2NJKaJXSslAEGU6nxCs5FZjshY2b61O8WwIDAQABAoGACoVjLs5R2IQlPQ9h7NrrEqXjV7oxMMk9ET4tXqD5pXdBKeOPQZV1BFcrglihUfQjxVs8HT31v9i3CuK4GhfwWb0k/E8d//vtnLILq8K/dQFLj0E1xPDgYEnf5dVEbvYUjEFVEl6SUeRHRE0YrKUT3VNpacCKHslD9ynNAalDixECQQC3BpR0ZBYkuozoc4K66icCsVat+61UoJRcaqAb1z5Z8ZroU6zJjmDEXLeb6AfivG/KqYqU9JS+LeQqrAfgB06JAkEA6lrBAj85ZX0ycd3hPobMOt2tMAtDRBtBLtlk6A3++GV47SakURWcL3ubZaXNJ5OkoflrzKQSFhtxba8OH0EawwJALcIuYX8YbixZyFAA0jxybmDp++udZTgUf5qE1xEUXKZkBUvOOkInfVB08zyqpAxaor+Kjz0q5vVQQz7pZSBOiQJAJC1wYC1sadti3ysWa3WZr3irFKCYeLoQXPAYYK5Qbv4TJeDyOsYwPzBAs/ddbT+giZScbJHjbOA9qWX9sxt0ywJBAJnO1u0UD1nPuOdzHvw3C7t5FaT3qS/5+diUvz0D1tlT76y4/PQd6CGxvADyW/nRzOaUCR9zEUiPohVbLD2xP24=',
      texts: '',
      encryptionText: '',
      DecryptText: ''
    }
  },
  methods: {
    encryption () {
      let key = this.keys
      let str = this.texts
      this.encryptionText = this.$YZmethods.encryption(key, str)
    },
    Decrypt () {
      let data = this.encryptionText
      let key2 = this.decryptkeys
      this.DecryptText = this.$YZmethods.Decrypt(key2, data)
    }
  }
}
</script>

<style scoped>

</style>
