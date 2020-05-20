import {Base64} from '../assets/js/base64'
import JsEncrypt from 'jsencrypt'
import CryptoJS from 'crypto-js'

export default {
  /* RSA 加密 内部处理了base64加密
  * key 加密时使用的公钥
  * str 将要被加密的数据
  * */
  encryption: (key, str) => {
    const jse = new JsEncrypt()
    // 设置公钥 后台服务器生成
    jse.setPublicKey(`-----BEGIN PUBLIC KEY-----${key}-----END PUBLIC KEY-----`) // 设置公钥
    const data = jse.encrypt(str.toString()) // 进行加密
    const encryptVPwd = data
    return encryptVPwd
  },
  /* RSA 解密 内部处理了base64解密
  * key 加密时使用的公钥
  * str 将要被解密的数据
  * */
  Decrypt: (key, str) => {
    const jse = new JsEncrypt()
    // 设置公钥 后台服务器生成
    jse.setPrivateKey(`-----BEGIN PUBLIC KEY-----${key}-----END PUBLIC KEY-----`) // 设置公钥
    const encryptVPwd = str
    const data = jse.decrypt(encryptVPwd.toString()) // 进行解密
    return data
  },

  /* DES + base64 加密
  * word 将要被加密的数据
  * keys 加密时使用的秘钥
  * iv   字阵必须要有，源码中iv属于必填项
  * */
  encryptDES: (word, keys) => {
    const keyHex = CryptoJS.enc.Utf8.parse(keys)
    const ivHex = CryptoJS.enc.Utf8.parse(keys)
    const encrypted = CryptoJS.DES.encrypt(word, keyHex, {
      iv: ivHex,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }
    )
    const encryptVPwd = Base64.encode(encrypted.ciphertext.toString()) // base64加密
    return encryptVPwd
  },
  /* DES + base64 解密
  * word 将要被解密的数据
  * keys 解密时使用的秘钥
  * iv   字阵必须要有，源码中的iv属于必填项
  * */
  decryptDES: (word, keys) => {
    const Word = Base64.decode(word) // base64解密
    const keyHex = CryptoJS.enc.Utf8.parse(keys)
    const ivHex = CryptoJS.enc.Utf8.parse(keys)
    const decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Hex.parse(Word)
    }, keyHex, {
      iv: ivHex,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })

    return decrypted.toString(CryptoJS.enc.Utf8)
  }
}
