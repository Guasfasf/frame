<template>
  <div>
    <tinymce ref="editor" :height="400" v-model="content" />
    {{content}}
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  name: 'tinymces',
  components: {
    Tinymce
  },
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {}
  }
}
</script>

<style scoped>

</style>
