;(function(factory) {
  //factory是一个函数，下面的gtExports就是他的参数

  // Support three module loading scenarios
  if (
    typeof require === 'function' &&
    typeof exports === 'object' &&
    typeof module === 'object'
  ) {
    // [1] CommonJS/Node.js
    // [1] 支持在module.exports.abc,或者直接exports.abc
    var target = module['exports'] || exports // module.exports is for Node.js
    factory(target)
  } else if (typeof define === 'function' && define['amd']) {
    // [2] AMD anonymous module
    // [2] AMD 规范
    //define(['exports'],function(exports){
    //    exports.gt = function(){}
    //});
    define(['exports'], factory)
  } else {
    // [3] No module loader (plain <script> tag) - put directly in global namespace
    factory((window['gt'] = {}))
  }
})(function(gtExports) {
  'use strict'
  //gt的全局定义 gtExports是undefined 对应着上面的[3] 这种情况
  var gt = typeof gtExports !== 'undefined' ? gtExports : {}

  //定义一个gt的方法
  gt.abc = function(s) {
    alert(s)
  }
  /**
   * @Created by xiandan on 2017-10-09
   * @desc 根据时间,格式 戳返回日期
   * @param { date } - 时间戳  @param { fmt }  - 格式格式
   * @return { fmt }
   * @dome01 DateFormat(1507513800642, 'yyyy/MM/dd hh:mm:ss')  => 2017/10/09 09:50:00
   * @dome02 DateFormat(1507513800642, 'yyyy-MM-dd hh:mm:ss')  => 2017-10-09 09:50:00
   * @dome03 DateFormat(1507513800642, 'yyyy.MM.dd , hh-mm-ss') => 2017.10.09 , 09-50-00
   */
  gt.dateFormat = function(date, fmt) {
    if (!(date && true)) {
      return date
    }
    date = new Date(parseInt(date))
    var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    }
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
    }
    return fmt
  }
  /**
   * @Created by xiandan on 2017-10-09
   * @desc 验证数据类型
   * @param { val }  需要判断的值
   * @return  返回true or false
   */
  gt.isArray = function(val) {
    return Object.prototype.toString.call(val) === '[object Array]'
      ? true
      : false
  }
  gt.isObject = function(val) {
    return Object.prototype.toString.call(val) === '[object Object]'
      ? true
      : false
  }
  gt.isNumber = function(val) {
    return Object.prototype.toString.call(val) === '[object Number]'
      ? true
      : false
  }
  gt.isString = function(val) {
    return Object.prototype.toString.call(val) === '[object String]'
      ? true
      : false
  }
  /**
   * @desc 手机验证
   * @param { number }  
   * @return  { Boolean }
   */
  gt.mobilePhone = function(obj) {
    var isPhone = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/
    return isPhone.test(obj)
  }
  /**
   * @desc 固话验证
   * @param { number }  
   * @return  { Boolean }
   */
  gt.fixedTelephone = function(obj) {
    var isfixed = /^([0-9]{3,4})?[0-9]{7,8}$/
    return isfixed.test(obj)
  }
  /**
   * @desc 固话+手机验证
   * @param { number }  
   * @return  { Boolean }
   */
  gt.phone = function(obj) {
    var isPhone = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/
    var isfixed = /^([0-9]{3,4})?[0-9]{7,8}$/
    return isPhone.test(obj) || isfixed.test(obj) ? true : false
  }
  /**
   * @desc 验证价格
   * @param { number }  
   * @return  { Boolean }
   */
  gt.isPrice = function(val) {
    var res = /^[0-9]+(.[0-9]{1,2})?$/
    return res.test(val)
  }
  /**
   * @desc 去除空格
   * @param { value }  
   * @return  { value }
   */
  gt.removeSpaces = function(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
  /**
   * @desc 数组去重
   * @param { Array }  
   * @return  { Array }
   */
  gt.arrayUnique = function(array) {
    //数组去重
    var r = []
    for (var i = 0, l = array.length; i < l; i++) {
      for (var j = i + 1; j < l; j++) if (array[i] === array[j]) j = ++i
      r.push(array[i])
    }
    return r
  }
  /**
   * @desc 车牌号码验证 ,大小写不区分
   * @param { String value }  
   * @return  { Boolean }
   */
  gt.isCarNo = function(value) {
    var reg = /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{4}[a-zA-Z_0-9_\u4e00-\u9fa5]$|^[a-zA-Z]{2}\d{7}$ /
    return reg.test(value)
  }
  /**
   * @desc 闭区间  获取随机数
   * @param { min, max }  
   * @return  { Number }
   */
  gt.getRandom = function(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min, 10)
  }
  /**
   * @desc 判断网页是否在微信浏览器打开
   * @param { }  
   * @return  { Boolean }
   */
  gt.isWeChat = function() {
    return (
      navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ===
      'micromessenger'
    )
  }
  /**
   * @desc 判断手机系统  Apple
   * @param { }  
   * @return  { Boolean }
   */
  gt.isApple = function() {
    return /ip(hone|ad|od)/i.test(navigator.userAgent.toLowerCase())
  }
  /**
   * @desc 判断手机系统  Android
   * @param { }  
   * @return  { Boolean }
   */
  gt.isAndroid = function() {
    return /android/i.test(navigator.userAgent.toLowerCase())
  }
  /**
   * @desc js仿照md5
   * @param { }  
   * @return  { Number }
   */
  gt.md5 = function() {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    return str
      .split('')
      .sort(function(v1, v2) {
        return Math.random() > 0.5
      })
      .join('')
      .slice(0, 32)
  }
  /**
   * @desc 获取星期几
   * @param { }  
   * @return  { week }
   */
  gt.getDay = function() {
    var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return arr[new Date().getDay()]
  }
  /**
   * @desc 对象转为url字符串形式
   * @param { Obje}  
   * @return  { String }
   */
  gt.urlJsonLsit = function(obj) {
    return Object.keys(obj)
      .map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
      })
      .join('&')
  }
  /**
   * @desc 是否包含字符串
   * @param { str, substr}  
   * @return  { Boolean }
   */
  gt.isContains = function(str, substr) {
    return new RegExp(substr).test(str)
  }
  /**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
  gt.isEmail = function(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
  }
  /**
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
  gt.isIdCard = function(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
      str
    )
  }
  /**
 * 
 * @desc   判断是否为URL地址
 * @param  {String} str 
 * @return {Boolean}
 */
  gt.isUrl = function(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
      str
    )
  }
  /**
 * 
 * @desc   现金额转大写
 * @param  {Number} n 
 * @return {String}
 */
  gt.digitUppercase = function(n) {
    var fraction = ['角', '分']
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']]
    var head = n < 0 ? '欠' : ''
    n = Math.abs(n)
    var s = ''
    for (var i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
      ).replace(/零./, '')
    }
    s = s || '整'
    n = Math.floor(n)
    for (var i = 0; i < unit[0].length && n > 0; i++) {
      var p = ''
      for (var j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p
        n = Math.floor(n / 10)
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
    }
    return (
      head +
      s
        .replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整')
    )
  }
  /**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
  gt.parseQueryString = function(url) {
    url = url == null ? window.location.href : url
    var search = url.substring(url.lastIndexOf('?') + 1)
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    )
  }
  /**
 * 
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
  gt.stringfyQueryString = function(obj) {
    if (!obj) return ''
    var pairs = []

    for (var key in obj) {
      var value = obj[key]

      if (value instanceof Array) {
        for (var i = 0; i < value.length; ++i) {
          pairs.push(
            encodeURIComponent(key + '[' + i + ']') +
              '=' +
              encodeURIComponent(value[i])
          )
        }
        continue
      }

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }

    return pairs.join('&')
  }
})
