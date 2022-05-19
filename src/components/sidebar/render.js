import Vue from 'vue'
const test = Vue.component('test-demo', {
  name: 'glftest',
  template: '<p @click="modify">glf{{level}}{{title}}</p>',
  props: {
    level: {
      type: [Number, String],
      required: false,
      default: ''
    }
  },
  data () {
    return {
      title: 'glf'
    }
  },
  methods: {
    modify () {
      this.title = '123'
    }
  },
  render (createElement, context) {
    // console.log('render ====')
    return createElement(
      'h' + this.level,
      this.$slots.default
    )
  }
})

export {
  test
}
