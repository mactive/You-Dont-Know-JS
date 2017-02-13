function theFunction(name, profession) {
  console.log(this);
  console.log("My name is " + name + " and I am a " + profession + ".");
}

theFunction("John", "fireman");
theFunction.apply(theFunction, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
// theFunction.call(undefined, ...["Matthew", "physicist"]);