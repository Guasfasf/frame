export default{
  // 手机号
  phone: (str) => {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
  },
  // 身份证
  idendityId: (card) => {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(card)
  },
  // 信息号
  information: (information) => {
    const reg = /[A-Za-z_][A-Za-z_0-9]{3,3}$/
    return reg.test(information)
  },
  // url
  website: (http) => {
    const reg = /^((([hH][tT][tT][pP][sS]?|[fF][tT][pP])\:\/\/)?([\w\.\-]+(\:[\w\.\&%\$\-]+)*@)?((([^\s\(\)\<\>\\\"\.\[\]\,@;:]+)(\.[^\s\(\)\<\>\\\"\.\[\]\,@;:]+)*(\.[a-zA-Z]{2,4}))|((([01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}([01]?\d{1,2}|2[0-4]\d|25[0-5])))(\b\:(6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{0,3}|0)\b)?((\/[^\/][\w\.\,\?\'\\\/\+&%\$#\=~_\-@]*)*[^\.\,\?\"\'\(\)\[\]!;<>{}\s\x7F-\xFF])?)$/
    return reg.test(http)
  },
  computeAge (UUserCard) {
    let birthday = ''
    if (UUserCard.length === 15) {
      birthday = '19' + (UUserCard.substring(6, 8) + '-' + UUserCard.substring(8, 10) + '-' + UUserCard.substring(10, 12))
    } else if (UUserCard.length === 18) {
      birthday = (UUserCard.substring(6, 10) + '-' + UUserCard.substring(10, 12) + '-' + UUserCard.substring(12, 14))
    }
    // 获得今天的时间
    const date = new Date()
    birthday = new Date(birthday)
    const newDate = date.getTime() - birthday.getTime()
    // 向下取整  例如 10岁 20天 会计算成 10岁
    // 如果要向上取整 计算成11岁，把floor替换成 ceil
    return Math.floor(newDate / 1000 / 60 / 60 / 24 / 365)
  },
  computeBir (UUserCard) {
    let birthday = ''
    if (UUserCard.length === 15) {
      birthday = '19' + (UUserCard.substring(6, 8) + '-' + UUserCard.substring(8, 10) + '-' + UUserCard.substring(10, 12))
    } else if (UUserCard.length === 18) {
      birthday = (UUserCard.substring(6, 10) + '-' + UUserCard.substring(10, 12) + '-' + UUserCard.substring(12, 14))
    }
    // 获得今天的时间
    const date = new Date()
    birthday = new Date(birthday)
    const newDate = date.getTime() - birthday.getTime()
    return newDate
  },
  // 去除富文本空格和&nbsp;
  contentTest (str) {
    return str.replace(/<[^>]+>/g, '').replace(/[ ]|[&nbsp;]/g, '')
  },
  // String替换空格并转数组
  // const test = '_aaa_bbb_c_'
  stringToArray (test) {
    const a = test.replace(/_/g, ' ')
    const b = a.split(/[\s]/)
    for (var i = 0; i < b.length; i++) {
      if (!b[i]) {
        b[i] = 'input'
      }
    }
    return b
  }
}
