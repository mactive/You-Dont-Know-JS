//form http://www.cnblogs.com/xxcanghai/p/5189353.html
// 构造函数
function Foo() {
		// 前面没有var 所以将外层作用域的getName覆盖了,如果外层也没有会在window上创建一个getName
    getName = function () { alert (1); }; 
    return this;
}
// 类方法直接调用
Foo.getName = function () { alert (2);};
// 实例方法 需要new Foo()才能调用
Foo.prototype.getName = function () { alert (3);};
// var 变量声明提升 level1
var getName = function () { alert (4);};
// 函数表达式提升 level2 alert(5) 会被 后定义的 alert(4) 覆盖
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName(); //2
getName(); //4
Foo().getName(); // 1
getName(); // 1 
new Foo.getName(); //2
new Foo().getName(); //3
