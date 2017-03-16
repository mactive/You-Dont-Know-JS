class Animal {
  constructor(public name: string){

  }
  move(distanceInMeters: number = 0){
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

class Snake extends Animal {
  constructor(name: string){
    super(name);
  }
  move(distanceInMeters: number = 5){
    console.log('Slithering');
    super.move(distanceInMeters);
  }
}

let snake = new Snake('ss');