import Vue from 'vue'
import Main from './message.vue'

let MessageConstructor = Vue.extend(Main)

const instances = []
const instanceDic = {}
let seek = 1

function close (id, key) {
  for (let i = 0, len = instances.length; i < len; i++) {
    const item = instances[i]
    if (id === item.id) {
      if (key) {
        delete instanceDic[key]
      }
      instances.splice(i, 1)
      break
    }
  }
}

export default function (options = {}) {
  const key = options.key
  let instance
  if (Object.prototype.hasOwnProperty.call(options, 'key')) {
    if (Object.prototype.hasOwnProperty.call(instanceDic, key)) {
      instanceDic[key].resetTimer()
      return
    } else {
      instance = instanceDic[key] = new MessageConstructor({data: options})
    }
  } else {
    instance = new MessageConstructor({data: options})
  }
  const id = instance.id = seek++

  // 手动地挂载一个未挂载的实例。$mount(param)中param不存在时，模板将被渲染为文档之外的的元素，并且你必须使用原生
  // DOM API 把它插入文档中。
  instance.vm = instance.$mount()
  // 用原生DOM API把它插入body中
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el

  instances.push(instance)
  instance.onClose = function () {
    close(id, key)
  }
}
