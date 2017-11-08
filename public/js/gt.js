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
})