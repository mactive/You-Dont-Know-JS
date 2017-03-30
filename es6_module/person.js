var person = {
  name: "mac",
  age: 33
};
var personConstructor = function(name = person.name, age = person.age){
  this.name = name;
  this.age = age;
}

personConstructor.prototype.breath = function(){
  console.log(this.name, 'is breathing');
}

export function eat(food = 'apple') {
  console.log('func eat',food);
}
export { person as defaultPerson };

export default person;
export default personConstructor;
