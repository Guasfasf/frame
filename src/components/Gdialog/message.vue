<template>
  <transition name="message">
    <div class="message" v-show="visible">
      <span class="message-icon">
        iconClass:{{iconClass}}
        <i v-if="iconClass" :class="iconClass"></i>
        <i
          v-else-if="type === 'success'"
          class="el-icon-check"
        ></i>
        <i v-else-if="type === 'error'" class="el-icon-close"></i>
      </span>
      <span>{{ message }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  created () {
  },
  mounted () {
    this.startTimer()
  },
  data () {
    return {
      type: 'success',
      duration: 3000,
      visible: false,
      message: '',
      iconClass: '',
      timer: null,
      closed: false
    }
  },
  computed: {},
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  methods: {
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    resetTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.startTimer()
      }
    }
  }
}
</script>

<style>
.message {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  text-align: left;
  padding: 10px 16px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  background: #fff;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
  0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  max-width: 70%;
  transition: opacity 0.5s, top 0.4s;
  top: 20px;
}

.message-enter,
.message-leave-to {
  top: 0;
  opacity: 0;
}

.message-enter-to {
  opacity: 1;
}

.message-icon {
  margin-right: 16px;
}

.iconfont.success {
  color: #67c23a;
}

.iconfont.error {
  color: #e27470;
}
</style>
