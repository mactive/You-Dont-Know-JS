import Person, {defaultPerson, eat } from './person'
console.log(Person);
eat();
eat('banana');

let t1 = new Person('tick', 12);
t1.breath();