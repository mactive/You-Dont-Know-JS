class AnimalA{
  name: string;
  constructor(theName: string){
    this.name = theName;
  }
  move(distanceInMeters: number = 0){
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class SnakeA extends AnimalA {
  constructor(name: string){ super(name);}
  move(distanceInMeters = 5){
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

let snakey = new SnakeA('ooo');
// snakey.move();

interface RodentAnimal {
  teeth: number
  feet: number
  familyName?: string
  nocturnal?: boolean
}

class Mouse implements RodentAnimal{
  teeth: number = 32;
  feet: number = 4;
}

let moz = new Mouse();
console.log(moz.feet);