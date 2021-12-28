<template>
  <div>
    <!-- 列表数据 -->
    <ul class="shop">
      <li v-for="(item, index) in items" :key="index"  @click="additem">
        <img src="../../static/img/logo.png" height="200" width="200"/>
        <span>{{item.text}}</span>
        <span>{{item.price}}</span>
      </li>
    </ul>
    <!-- 小球 -->
    <div>
      <div v-for="(ball, index) in balls" :key="index">
        <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0, // 每次点击+1
      items: [
        {
          text: '苹果mendian门店',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        },
        {
          text: '香蕉',
          price: 15
        }
      ], // 数据
      balls: [ // 小球
        {
          show: false
        }
      ],
      dropBalls: [] // 初始化小球
    }
  },
  methods: {
    /*
    * 点击事件
    * event 当前点击元素
    * */
    additem (event) {
      this.drop(event.target)
      this.count++
    },
    /* transition 产生作用
    * 更改小球状态
    * 为小球绑定当前元素 之后使用 */
    drop (el) { // 抛物
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          // 添加小球
          this.dropBalls.push(ball)
          return
        }
      }
    },
    /* 购物车小球动画实现
     * 拿到小球的状态，并查看状体是否为true
     * 获取当前元素位置
     * 使用transform实现小球动态定位 */
    beforeDrop (el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect() // 元素相对于视口的位置
          let x = rect.left - 32
          let y = -(window.innerHeight - rect.top - 22) // 获取小球出现的y
          el.style.display = ''
          el.style.webkitTransform = 'translateY(' + y + 'px)' // 小球的translateY
          el.style.transform = 'translateY(' + y + 'px)'
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = 'translateX(' + x + 'px)'// 小球的translateX
          inner.style.transform = 'translateX(' + x + 'px)'
        }
      }
    },
    /* 重置小球数量  样式重置
     * offsetHeight 这一步只是触发没有使用，因为有eslint警告所以加上了console.log
     * 设置小球的运动轨迹
     * 运动轨迹实际查看css样式中的 贝塞尔曲线 */
    dropping (el, done) {
      let r = el.offsetHeight // 触发浏览器的重排
      console.log(r)
      el.style.webkitTransform = 'translate3d(0,0,0)' // 小球外部盒子
      el.style.transform = 'translate3d(0,0,0)'
      let inner = el.getElementsByClassName('inner-hook')[0]
      inner.style.webkitTransform = 'translate3d(0,0,0)' // 小球
      inner.style.transform = 'translate3d(0,0,0)'
      el.addEventListener('transitionend', done)
    },
    /* 初始化小球 */
    afterDrop (el) {
      let ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style scoped>
  .shop {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid red;
  }

  .shop li {
    display: flex;
    flex-flow: column;
    margin: 0 20px;
  }

  /* 小球的掉落位置 */
  .ball {
    position: fixed;
    left: 132px;
    bottom: 122px;
    z-index: 200;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
  }

  .inner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: rgb(0, 160, 220);
    transition: all 0.4s linear;
  }
</style>
