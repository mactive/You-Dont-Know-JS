class Greeter {
  public greeting: string;
  constructor(message: string){
    this.greeting = message;
  }
  greet(){
    return "Hello " + this.greeting;
  }
}

let gr = new Greeter('world');
gr.greeting;
console.log(gr.greet());