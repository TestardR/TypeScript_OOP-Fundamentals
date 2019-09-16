"use strict";
exports.__esModule = true;
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
var Animal = /** @class */ (function () {
    function Animal(legs, eyes) {
        this.legs = legs;
        this.eyes = eyes;
    }
    Animal.prototype.location = function () {
        console.log('sending location');
    };
    return Animal;
}());
exports.Animal = Animal;
