<template>
  <div style="background: #f8f9fa;">
    <div class="tabWl">
      <input
        v-model="value"
        id="tab-toggle"
        type="checkbox"
        class="test_input"
        @click="test"
      >
      <label class="test" for="tab-toggle"></label>
    </div>
    <div :class="{'div': value}">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'tabWl',
  data () {
    return {
      value: false
    }
  },
  methods: {
    test () {
      var a = document.getElementById('tab-toggle')
      console.dir(a.checked)
      console.dir(this.value)
    }
  }
}
</script>

<style scoped>
.tabWl{
  width: 200px;
  border-radius: 10px;
  height: 30px;
  background: #e3e6eb;
  box-sizing: border-box;
  padding: 2px;
}
.test_input{
  display: none;
  box-sizing: border-box;
}
.test{
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  outline: 0;
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: all .4s ease;
}
.test:before{
  position: absolute;
  box-sizing: border-box;
  content: "";
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
.test:after{
  position: absolute;
  box-sizing: border-box;
  content: "";
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 6px;
}
.test:before{
  left: 0;
  content: "aa";
}
.test:after{
  left: 50%;
  content: "bbb";
}
.test_input:checked+.test:before{
  left: 50%;
  content: "bbb";
}
.test_input:checked+.test:after{
  left: 0;
  content: "aa";
}
</style>
