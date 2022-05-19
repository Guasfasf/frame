/**
 * table 固定头部滚动
 * @param id table外层div的id
 */
function initScroll (id= '#flowtable-cont') {
  var tableflow = document.querySelector(id);   //获取table元素
  function scrollHandle(e) {
    var scrollTop = this.scrollTop;
    this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
  }

  tableflow.addEventListener('scroll', scrollHandle);   //监听scroll事件
}
  /**
 * 根据高度定位
 * @param height Number
 * @param id #flowtable-cont
 */
function scrollTopHeight (height, id ='#flowtable-cont') {
  var flowtable = document.querySelector(id);
  flowtable.scrollTop = height;
}

/**
 * 保存记录缓存
 * @params{
        id: 数据id,
        step: 记录步骤,
        modifyType: 操作属性,
        modifyValueOld: 旧数据,
        modifyValueNew: 新数据,
        isBack: 是否回退 默认false
      }
 */
function setLocal (params) {
  var arr = JSON.parse(localStorage.getItem("step")) || [];
  if (arr.length > 9) {
    console.log('记录大于10条，每次添加将删除最早一条操作记录')
    arr.shift()
  }
  arr.push(params)
  arr = arr.filter(e => {
    return !e.isBack
  })
  if (arr.length > 9) {
    console.log('记录大于10条，记录步骤重新排序')
    arr.forEach((e, index) => {
      e.step = index+1
    })
  }
  localStorage.setItem("step", JSON.stringify(arr));
  console.log(localStorage.getItem("step"));
}
/**
 * 回退 更新回退状态
 */
function modifyBackStepLocal () {
  var arr = JSON.parse(localStorage.getItem("step")) || [];
  for(var i=arr.length-1;i>=0;i--) {
    if (!arr[i].isBack) {
      arr[i].isBack = true
      break
    }
  }
  localStorage.setItem("step", JSON.stringify(arr));
}

/**
 * 前进 更新回退状态
 */
function modifyStepLocal () {
  var arr = JSON.parse(localStorage.getItem("step")) || [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i].isBack) {
      arr[i].isBack = false
      break
    }
  }
  localStorage.setItem("step", JSON.stringify(arr));
}
