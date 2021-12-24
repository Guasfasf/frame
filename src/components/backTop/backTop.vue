<template>
  <transition :name="transitionName">
    <div class="page-component-up"
         ref="backTop"
         @click="backToTop"
         v-show="visible"
         :style="Style">
      <i class="el-icon-arrow-up"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    transitionName: {
      type: String,
      default: 'fade'
    },
    customStyle: {
      type: Object
    },
    visibilityHeight: { // 纵向滑动多远距离出现滚动条
      type: Number
    },
    backPosition: { // 返回顶部时，滚动到哪里（距离顶部的距离）
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      visible: false,
      interval: null,
      Style: this.customStyle
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    debounce (fn, timeout, context) {
      // 如果上次调用过还没执行，就清除掉，重设定时
      clearTimeout(fn.dId)
      fn.dId = setTimeout(function () {
        fn.call(context)
      }, timeout)
    },
    test () {
      const scrollHeight = window.pageYOffset + document.documentElement.clientHeight
      if (document.body.scrollHeight === scrollHeight) {
        this.Style.bottom = window.screen.height / 2 + 'px'
      } else {
        this.Style.bottom = '250px'
      }
    },
    handleScroll () {
      console.log(window.pageYOffset > this.visibilityHeight);
      this.visible = window.pageYOffset > this.visibilityHeight
      this.debounce(this.test, 50, null)
    },
    backToTop () {
      if (this.interval) return
      let distanceY = window.pageYOffset
      let i = 0
      this.interval = setInterval(() => {
        let next = Math.floor(this.easeInOutQuad(10 * i, distanceY, -distanceY, 500))
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition)
          clearInterval(this.interval)
          this.interval = null
        } else {
          window.scrollTo(0, next)
        }
        i++
      }, 17)
    },
    /*
      缓动公式（Tween算法）
       t: 动画已经执行的时间（实际上时执行多少次/帧数）
       b: 起始位置
       c: 终止位置
       d: 从起始位置到终止位置的经过时间（实际上时执行多少次/帧数）

      http://www.cnblogs.com/mrsunny/archive/2011/06/21/2086080.html
    */
    easeInOutQuad (t, b, c, d) {
      // 判断当前时间是否总在总时间的一半以内，是的话执行缓入函数，否则的话执行缓出函数
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b
      } else {
        // 将总长度设置为一半，并且时间从当前开始递减，对图像进行垂直向上平移
        return -c / 2 * (--t * (t - 2) - 1) + b
      }
    }
  }
}
</script>

<style scoped>
.page-component-up{
  position: fixed;
  cursor: pointer;
  text-align: center;
  transition: .3s;
  z-index: 99;
}
img{
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.15);
}
</style>
