(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS之类的
    module.exports = factory;
  } else {
    // 浏览器全局变量(root 即 window)
    root.createjs = factory(root);
  }
}(this, function () {
  return window.createjs;
}));
