<template>
  <div>
    <h1>如果没有选定输入框是无法将扫码得到的结果赋值到输入框内显示</h1>
    <el-input id="glf" v-model="barCode" v-glf size="small" maxlength="13"  @keyup.enter.native="payCode" ></el-input>
    <button @click="barCode = 'test'">设置默认文字，体现文字长度</button>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      barCode: '',
      inpStatus: false
    }
  },
  mounted () {
    var inp = document.getElementById('glf')
    inp.addEventListener('input', () => {
      if (!this.inpStatus) {
        console.log('input')
      }
    })
    inp.addEventListener('compositionstart', () => {
      console.log('compositionstart')
      this.inpStatus = true
    })
    inp.addEventListener('compositionend', () => {
      console.log('compositionend')
      this.inpStatus = false
    })
  },
  directives: {
    glf: {
      inserted (el, binding, vnode, oldVnode) {
        // console.log('inserted', el, binding, vnode, oldVnode);
        var maxLength = vnode.data.attrs.maxlength
        var span = document.createElement('span')
        span.innerText = `0/${maxLength}`
        el.append(span)
      },
      update (el, binding, vnode, oldVnode) {
        // console.log('update', el, binding, vnode);
        var l = vnode.child.value.length
        var span = el.getElementsByTagName('span')[0]
        var maxLength = vnode.data.attrs.maxlength
        span.innerText = `${l}/${maxLength}`
      }
    }
  },
  methods: {
    payCode () {}
  }
}
</script>
<style lang="less">
</style>
