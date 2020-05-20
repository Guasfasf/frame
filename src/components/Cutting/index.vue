<template>
  <div>
    <!-- 多图片上传 -->
    <el-upload v-if="multiple" accept=".jpg,.jpeg,.png,.bmp,.JPG,.JPEG,.PNG,.BMP" action='string' list-type="picture-card" :on-preview="handlePreview" :auto-upload="false"
               :on-remove="handleRemove" :http-request="upload" :on-change="consoleFL" :on-exceed="exceedImg" :limit="maxLength" :file-list="uploadListNew">
      <i class="el-icon-plus"></i>
    </el-upload>
    <!-- 单图片上传 -->
    <el-upload v-else accept=".jpg,.jpeg,.png,.bmp,.JPG,.JPEG,.PNG,.BMP" class="avatar-uploader" action="'string'" :auto-upload="false" :show-file-list="false"
               :on-change="handleCrop" :http-request="upload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" ref="singleImg" @mouseenter="mouseEnter"
           @mouseleave="mouseLeave" :style="{width:width+'px',height:height+'px'}">
      <i v-else class="el-icon-plus avatar-uploader-icon"
         :style="{width:width+'px',height:height+'px','line-height':height+'px','font-size':height/6+'px'}"></i>
      <!-- 单图片上传状态显示 -->
      <!-- <div v-if="imageUrl" class="reupload" ref="reupload" @click.stop="handlePreviewSingle" @mouseenter="mouseEnter" @mouseleave="mouseLeave" :style="{width:reuploadWidth+'px',height:reuploadWidth+'px','line-height':reuploadWidth+'px','font-size':reuploadWidth/5+'px'}">重新上传</div> -->
      <div id="uploadIcon" v-if="imageUrl" ref="reupload" @mouseenter="mouseEnter" @mouseleave="mouseLeave"
           :style="{width:'100%'}">
        <i class="el-icon-zoom-in" @click.stop="handlePreviewSingle"
           :style="{color:'#2E2E2E',fontSize:'25px',display:'inline-block',paddingRight:'15px'}"></i>
        <i class="el-icon-delete" :style="{color:'#2E2E2E',fontSize:'25px',display:'inline-block'}" @click.stop="handleDelete"></i>
      </div>
      <div class="reupload" ref="uploading"
           :style="{width:reuploadWidth+'px',height:reuploadWidth+'px','line-height':reuploadWidth+'px','font-size':reuploadWidth/5+'px'}">
        上传中..
      </div>
      <div class="reupload" ref="failUpload"
           :style="{width:reuploadWidth+'px',height:reuploadWidth+'px','line-height':reuploadWidth+'px','font-size':reuploadWidth/5+'px'}">
        上传失败
      </div>
    </el-upload>
    <!-- 多图片预览弹窗 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <!-- 剪裁组件弹窗 -->
    <el-dialog :visible.sync="cropperModel" width="800px" :before-close="beforeClose">
      <Cropper :img-file="file" ref="vueCropper" :fixedNumber="fixedNumber" @upload="upload">
      </Cropper>
    </el-dialog>

    <!-- 自定义弹窗 Gdialog-->
    <Gdialog :dialogVisible="dialogVisibleG" @closeDiaLog="closeDiaLog" :dialogType="dialogType">
      <div slot="slotDiaLogBody">
        {{dialogMessage}}
      </div>
    </Gdialog>
  </div>
</template>
<script>
import Cropper from './cropper'
import Gdialog from '@/components/Gdialog/Gdialog'
export default {
  name: 'uploader',
  props: {
    targetUrl: {
      // 上传地址
      type: String,
      default: '/Uploadimg'
    },
    multiple: {
      // 多图开关
      type: Boolean,
      default: false
    },
    initUrl: {
      // 初始图片链接
      default: 'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg'
    },
    fixedNumber: {
      // 剪裁框比例设置
      default: function () {
        return [1, 1]
      }
    },
    width: {
      // 单图剪裁框宽度
      type: Number,
      default: 178
    },
    height: {
      // 单图剪裁框高度
      type: Number,
      default: 178
    },
    maxLength: {
      // 上传最大图片长度
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      dialogVisibleG: false, // 弹窗
      dialogType: '', // 弹窗类型
      dialogMessage: '', // 弹窗提示语
      file: '', // 当前被选择的图片文件
      imageUrl: '', // 单图情况框内图片链接
      dialogImageUrl: '', // 多图情况弹窗内图片链接
      uploadList: [], // 上传图片列表
      uploadListNew: [], // 上传图片列表返回值
      reupload: true, // 控制"重新上传"开关
      dialogVisible: false, // 展示弹窗开关
      cropperModel: false, // 剪裁组件弹窗开关
      reuploadWidth: this.height * 0.7 // 动态改变”重新上传“大小
    }
  },
  updated () {
    if (this.$refs.vueCropper) {
      this.$refs.vueCropper.Update()
    }
  },
  watch: {
    initUrl: function (val) {
      // 监听传入初始化图片
      console.info('watch')
      console.info(val)
      if (val) {
        if (typeof this.initUrl === 'string') {
          this.imageUrl = val
        } else {
          this.uploadList = this.formatImgArr(val)
        }
      }
    }
  },
  mounted () {
    if (typeof this.initUrl === 'string') {
      this.imageUrl = this.initUrl
    } else {
      this.uploadList = this.formatImgArr(this.initUrl)
    }
    // this.uploadList = [{url: 'http://192.168.1.10:8078/08eebb14e7d44c80a7a9506f7bdc4bc0.png', status: 'ready', uid: 10, fileUid: 10}]
    // this.uploadListNew = JSON.parse(JSON.stringify(this.uploadList))
  },
  methods: {
    // 3s弹窗关闭
    closeDiaLog () {
      this.dialogVisibleG = false
    },
    /** **************************** multiple多图情况 **************************************/
    exceedImg (files, fileList) {
      this.dialogMessage = `超出了上传文件的最大限度${this.maxLength}`
      this.dialogType = 'error'
      this.dialogVisibleG = true
    },
    handlePreview (file) {
      // 点击进行图片展示
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleRemove (file, fileList) {
      // 删除图片后更新图片文件列表并通知父级变化
      let uploadListNew = this.uploadListNew.filter(e => {
        return e.fileUid !== file.uid
      })
      this.uploadListNew = uploadListNew
      this.uploadList = fileList
      // this.$emit('imgupload', this.formatImgArr(this.uploadList))
      this.$emit('imgupload', uploadListNew)
    },
    consoleFL (file, fileList) {
      // 弹出剪裁框，将当前文件设置为文件
      this.cropperModel = true
      this.file = file
      this.uploadList = fileList
    },
    /************************************************************************************/

    /* single单图情况 */
    handlePreviewSingle (file) { // 点击进行图片展示
      // this.dialogImageUrl = this.file.url
      this.dialogImageUrl = this.imageUrl
      this.dialogVisible = true
    },
    handleDelete () {
      this.imageUrl = ''
      this.dialogImageUrl = ''
    },
    mouseEnter () { // 鼠标划入显示“重新上传”
      this.$refs.reupload.style.display = 'block'
      if (this.$refs.failUpload.style.display === 'block') {
        this.$refs.failUpload.style.display = 'none'
      }
      this.$refs.singleImg.style.opacity = '0.6'
    },
    mouseLeave () {
      // 鼠标划出隐藏“重新上传”
      this.$refs.reupload.style.display = 'none'
      this.$refs.singleImg.style.opacity = '1'
    },
    handleCrop (file, files) {
      // 点击弹出剪裁框
      this.cropperModel = true
      this.file = file
      // this.imageUrl = file.url
    },
    /************************************************************************************/

    upload (data) {
      // 自定义upload事件
      if (!this.multiple) {
        // 如果单图，则显示正在上传
        this.$refs.uploading.style.display = 'block'
      }
      let formData = new FormData()
      formData.append('attachment', data)
      // todo 上传图片接口
      this.$http.post(this.targetUrl, formData).then(res => {
        if (!this.multiple) {
          // 上传完成后隐藏正在上传
          this.$refs.uploading.style.display = 'none'
        }
        if (res.data.CodeResult === 0) {
          // 上传成功将照片传回父组件
          const currentPic = this.$imgUrl + res.data.MsgResult
          if (this.multiple) { // 多图
            // this.uploadList.push({
            //   url: res.data.MsgResult,
            //   uid: this.file.uid
            // })
            // this.uploadList.pop()
            this.uploadListNew.push({
              url: currentPic,
              status: 'ready',
              fileUid: this.file.uid
            })
            // this.$emit('imgupload', this.formatImgArr(this.uploadList))
            this.$emit('imgupload', this.uploadListNew)
          } else { // 单图
            this.imageUrl = currentPic
            this.$emit('imgupload', res.data.MsgResult)
          }
        } else {
          // 上传失败则显示上传失败，如多图则从图片列表删除图片
          if (!this.multiple) {
            this.$refs.failUpload.style.display = 'block'
          } else {
            this.uploadList.pop()
          }
          this.dialogMessage = '上传失败。'
          this.dialogType = 'error'
          this.dialogVisibleG = true
        }
      })
      this.cropperModel = false
    },
    formatImgArr (arr) {
      const result = arr.map((item, index) => {
        if (typeof item === 'string') {
          return {
            url: item,
            uid: `index${index}`
          }
        } else {
          return item.url
        }
      })
      return result
    },
    beforeClose (done) {
      this.uploadList.pop()
      this.cropperModel = false
    }
  },
  components: {
    Cropper,
    Gdialog
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    color: #8c939d;
    text-align: center;
  }

  .avatar {
    display: block;
  }

  .reupload {
    border-radius: 50%;
    position: absolute;
    color: #fff;
    background-color: #000000;
    opacity: 0.6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  #uploadIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }
</style>
