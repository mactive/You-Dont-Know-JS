var MyModules = (function Manager(){
  var modules = {};
  
  /**
   * name: module name
   * deps: dependent
   * impl: implement
   */
  function define(name, deps, impl) {
    // 遍历依赖deps, 将modules的已有组件和deps数组建立连接
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    // 将impl和deps依赖 一同传入impl函数
    modules[name] = impl.apply(impl, deps);
  }
  
  function get(name) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  }
})();

/**
 * module > method
 * bar > hello
 */
MyModules.define("bar", [''], function(){
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello
  }
});

MyModules.define("foo", ['bar'], function(bar){
  var hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }

  return {
    awesome: awesome
  }
});


var bar = MyModules.get('bar');
var foo = MyModules.get('foo');
console.log(bar.hello('hippo'));

foo.awesome();