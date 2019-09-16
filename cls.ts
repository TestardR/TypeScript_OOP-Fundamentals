import { GpsListener } from './interface';

// // A class is a combination of state and behavior
// export class Animal {
//   //   // state
//   //   legs: number;
//   //   eyes: number;

//   //   constructor(legs: number, eyes: number) {
//   //     // the state of class = local variable
//   //     this.legs = legs;
//   //     this.eyes = eyes;
//   //   }

//   // More efficient way
//   constructor(private legs: number, protected eyes: number) {}

//   // behavior
//   run(): void {
//     this.legs += 5;
//     console.log(`Animal: speed is ${this.legs}`);
//   }
// }

export abstract class Animal implements GpsListener {
  constructor(private legs: number, protected eyes: number) {}

  abstract run(): void;

  location() {
    console.log('sending location');
  }
}
