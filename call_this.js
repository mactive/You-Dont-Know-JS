function identify() {
  console.log('identify', this.name);
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I am " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle"
}

var you = {
  name: "Reader"
}

speak.call(me);