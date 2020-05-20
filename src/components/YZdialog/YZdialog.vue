<template>
  <div v-if="dialogVisible" :class="{'error': 'back'}[dialogType]">
    <div class="diaLogBox" :class="dialogType">
      <div class="diaLogFlexBox">
        <!--<img v-if="dialogType === 'warning'" src="../../assets/img/u32.png"/>-->
        <!--<img v-if="dialogType === 'error'" src="../../assets/img/u30.png"/>-->
        <!--<img v-if="dialogType === 'success'" src="../../assets/img/u28.png"/>-->
        <div>{{dialogType}}图片：</div>
        <div v-if="dialogType !== 'success'" class="hand" style="position: absolute;right: -10px;top: -14px;" @click="closeXDialog">X</div>
        <slot name="slotDiaLogBody"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YZdialog',
  props: {
    dialogVisible: { // 是否显示弹窗
      default: false,
      type: Boolean
    },
    dialogType: { // 类型
      default: '',
      type: String
    }
  },
  watch: {
    dialogVisible () {
      if (this.dialogVisible) {
        /* this.$parent._data */
        setTimeout(e => {
          this.$emit('closeDiaLog')
        }, 1000)
      }
    }
  },
  methods: {
    closeXDialog () {
      this.$emit('closeXDialog')
    }
  }
}
</script>

<style scoped>
  .diaLogBox{
    width: 300px;
    /*height: 200px;*/
    padding: 10px;
    color: #333;
    border-radius: 15px;
    background-color: white;
    position: fixed;
    top: 40%;
    left: 40%;
    z-index: 9999999;
    border: 1px solid rgba(70, 58, 58, 0.45);
  }
  .diaLogFlexBox{
    display: flex;
    align-items: center;
    position: relative;
  }
  .diaLogFlexBox img{
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
  .back{
    height:100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .error{
    background-color: #FFE1E1;
    border: 1px solid #D77D79;
  }
  .warning{
    background-color: #FFFEE1;
    border: 1px solid #EFCA1B;
  }
  .success{
    background-color: #E7F8DE;
    border: 1px solid #52B531;
  }
</style>
