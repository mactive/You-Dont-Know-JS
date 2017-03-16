class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName){
    this.fullName = firstName + middleInitial + lastName;
  }
}

interface Person {
  lastName: string;
  firstName: string;
}

function greet(person: Person) {
  console.log("Hello, " + person.firstName + ' ' + person.lastName);
}

let stu = new Student('Jane', 'M.', 'User');

greet(stu);
