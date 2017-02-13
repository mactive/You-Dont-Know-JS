function foo() {
  console.log(a);
}

function bar(){
  // 这个a的作用域只在bar函数里.不是全局的
  var a = 3;
  foo();
}

var a = 2;
bar();