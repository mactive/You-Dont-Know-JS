class ANGreeter<T>{
  greeting: T;
  type: string;
  constructor(message: T){
    this.greeting = message;
  }
  greet(){
    console.log(this._plus());
    return this.greeting;
  }
  private _plus(){
    this.type = typeof this.greeting ;
    return this.type;
  }
}

let greeter = new ANGreeter<number>(1243);
let message:number = greeter.greet();
console.log(message);