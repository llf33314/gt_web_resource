;
(function (factory) {
  //factory是一个函数，下面的gtExports就是他的参数

  // Support three module loading scenarios
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    // [1] CommonJS/Node.js
    // [1] 支持在module.exports.abc,或者直接exports.abc
    var target = module['exports'] || exports; // module.exports is for Node.js
    factory(target);
  } else if (typeof define === 'function' && define['amd']) {
    // [2] AMD anonymous module
    // [2] AMD 规范 
    //define(['exports'],function(exports){
    //    exports.gt = function(){}
    //});
    define(['exports'], factory);
  } else {
    // [3] No module loader (plain <script> tag) - put directly in global namespace
    factory(window['gt'] = {});
  }
})(function (gtExports) {
  'use strict'
  //gt的全局定义 gtExports是undefined 对应着上面的[3] 这种情况
  var gt = typeof gtExports !== 'undefined' ? gtExports : {};

  //定义一个gt的方法
  gt.abc = function (s) {
    alert(s);
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
  gt.dateFormat = function (date, fmt) {
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
      'S': date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
  }
  /**
   * @Created by xiandan on 2017-10-09
   * @desc 验证数据类型
   * @param { val }  需要判断的值
   * @return  返回true or false
   */
  gt.isArray = function (val) {
    return Object.prototype.toString.call(val) === '[object Array]' ? true : false
  }
  gt.isObject = function (val) {
    return Object.prototype.toString.call(val) === '[object Object]' ? true : false
  }
  gt.isNumber = function (val) {
    return Object.prototype.toString.call(val) === '[object Number]' ? true : false
  }
  gt.isString = function (val) {
    return Object.prototype.toString.call(val) === '[object String]' ? true : false
  }
  /**
   * @desc 手机验证
   * @param { number }  
   * @return  { Boolean }
   */
  gt.mobilePhone = function (obj) {
    var isPhone = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    return isPhone.test(obj) ? true : false
  }
  /**
   * @desc 固话验证
   * @param { number }  
   * @return  { Boolean }
   */
  gt.fixedTelephone = function (obj) {
    var isfixed = /^([0-9]{3,4})?[0-9]{7,8}$/;
    return isfixed.test(obj) ? true : false
  }
  /**
   * @desc 固话+手机验证
   * @param { number }  
   * @return  { Boolean }
   */
  gt.phone = function (obj) {
    var isPhone = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    var isfixed = /^([0-9]{3,4})?[0-9]{7,8}$/;
    return isPhone.test(obj) || isfixed.test(obj) ? true : false
  }
  /**
   * @desc 验证价格
   * @param { number }  
   * @return  { Boolean }
   */
  gt.isPrice = function (val) {
    var res = /^[0-9]+(.[0-9]{1,2})?$/;
    return res.test(val) ? true : false
  }
  /**
   * @desc 去除空格
   * @param { value }  
   * @return  { value }
   */
  gt.removeSpaces = function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
  /**
   * @desc 数组去重
   * @param { Array }  
   * @return  { Array }
   */
  gt.arrayUnique = function (array) { //数组去重
    var r = [];
    for (var i = 0, l = array.length; i < l; i++) {
      for (var j = i + 1; j < l; j++)
        if (array[i] === array[j]) j = ++i;
      r.push(array[i]);
    }
    return r;
  }
})