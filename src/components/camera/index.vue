<template>
  <div class="camera_outer">
    <video id="videoCamera" autoplay width="300" height="200"></video>
    <canvas style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight" ></canvas>

    <div v-if="imgSrc" class="img_bg_camera">
      <img :src="imgSrc" alt="" class="tx_img">
    </div>
    <div v-if="imgList && imgList.length > 0">
      <img v-for="(item, index) in imgList" :key="index" :src="item" alt="" class="tx_img">
    </div>
    <button @click="getCompetence()">打开摄像头</button>
    <button @click="stopNavigator()">关闭摄像头</button>
    <button @click="setImage()">拍照</button>
    <button @click="timeSetImage()">定时拍照</button>
    <button @click="sjTimeImage()">1-5随机拍照</button>
    <button @click="delImgSrc()">返回</button>
  </div>
</template>
<script>
export default {
  props: {
    // 照片宽度
    videoWidth: {
      type: [Number, String],
      default: 300
    },
    // 照片高度
    videoHeight: {
      type: [Number, String],
      default: 200
    },
    // 定时时间 随机时间会直接覆盖
    time: {
      type: [Number, String],
      default: 1000
    },
    // 随机最小区间
    minNum: {
      type: [Number, String],
      default: 1000
    },
    // 随机最大区间
    maxNum: {
      type: [Number, String],
      default: 5000
    }
  },
  data () {
    return {
      imgSrc: '',
      timerImage: '',
      thisCanvas: null,
      thisContext: null,
      thisVideo: null,
      imgList: [],
      times: this.time
    }
  },
  methods: {
    // 调用权限（打开摄像头功能）
    getCompetence () {
      var _this = this
      this.thisCanvas = document.getElementById('canvasCamera')
      this.thisContext = this.thisCanvas.getContext('2d')
      this.thisVideo = document.getElementById('videoCamera')
      // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      var constraints = { audio: false, video: { width: this.videoWidth, height: this.videoHeight, transform: 'scaleX(-1)' } }
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        // 旧的浏览器可能没有srcObject
        if ('srcObject' in _this.thisVideo) {
          _this.thisVideo.srcObject = stream
        } else {
          // 避免在新的浏览器中使用它，因为它正在被弃用。
          _this.thisVideo.src = window.URL.createObjectURL(stream)
        }
        _this.thisVideo.onloadedmetadata = function (e) {
          _this.thisVideo.play()
        }
      }).catch(err => {
        console.log('err ==', err)
      })
    },
    // 验证
    proving () {
      if (!this.thisContext) {
        alert('先去开启摄像头')
        return true
      }
    },
    // 绘制图片（拍照功能）
    setImage () {
      if (this.proving()) return
      var _this = this
      // 点击，canvas画图
      _this.thisContext.drawImage(_this.thisVideo, 0, 0, _this.videoWidth, _this.videoHeight)
      // 获取图片base64链接
      var image = this.thisCanvas.toDataURL('image/png')
      _this.imgSrc = image
      this.imgList.push(image)
      this.$emit('refreshDataList', this.imgSrc)
    },
    // 定时拍照
    timeSetImage () {
      this.delImgSrc()
      if (this.proving()) return
      this.timerImage = setInterval(() => {
        this.setImage()
      }, this.times)
    },
    // 随机拍照
    sjTimeImage () {
      if (this.proving()) return
      clearInterval(this.timerImage)
      this.timerImage = setInterval(() => {
        this.setImage()
        this.times = this.getRndInteger(this.minNum, this.maxNum)
        this.sjTimeImage()
      }, this.times)
    },
    // 随机取值
    getRndInteger (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    // base64转文件
    dataURLtoFile (dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
    // 关闭摄像头
    stopNavigator () {
      this.thisVideo.srcObject.getTracks()[0].stop()
      this.delImgSrc()
    },
    // 删除图片，返回摄像
    delImgSrc () {
      clearInterval(this.timerImage)
      this.imgList = []
      this.imgSrc = ''
    }
  }

}

</script>
<style lang="less" scoped>
  .camera_outer{
    position: relative;
    overflow: hidden;
    background-size: 100%;
    video,canvas,.tx_img{
      -moz-transform:scaleX(-1);
      -webkit-transform:scaleX(-1);
      -o-transform:scaleX(-1);
      transform:scaleX(-1);
    }
    .img_bg_camera{
      //position: absolute;
      //bottom: 0;
      //left: 0;
      //right: 0;
      //top: 0;
      width:300px;
      height:200px;
    }
  }
</style>
