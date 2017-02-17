// 构造函数
function Car(name, wheels){
	this.name = name;
	this.wheels = wheels;
	this.speed = 0;
}
// 实例方法
Car.prototype = {
	constructor: Car, //如果Car 还需要继承才需要将 prototype.constructor指向构造函数
	start: function(){ console.log("启动车辆");},
	drive: function(){ 
		this.speed ++; 
		console.log("驾驶车辆");
	},
}
// 类方法 不需要new Car 就可以调用
Car.isACar = function (instance) {
	console.log("这是一辆真车");
}
Car.canfly = false; // 静态属性

var car1 = new Car('bmw', 4);
car1.start();
car1.drive();