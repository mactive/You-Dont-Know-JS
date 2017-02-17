function Gf(name, bar){
  this.name = name;
  this.bar = bar;
}

Gf.prototype = {
  constructor: Gf,
  sayWhat: function(){
    console.log(this.name + "("+ this.bar 
    +")"+" love you forever");
  }
}

var gf1 = new Gf("vivian", "f");
gf1.sayWhat();