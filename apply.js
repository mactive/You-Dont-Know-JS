function greet(){
  var reply = [this.person, 'Is An Awesome', this.role].join(' ');
  console.log(reply);
}

var i = {
  person: 'Douglas Corckford', role: 'Javascript Developer'
};

// greet.call(i);
greet.apply(i);
// greet.call(i, i.person, i.role);
