import { Animal } from './cls';

// export class Tiger extends Animal {
//   run(): void {
//     super.run();
//     console.log(`Tiger : sight is ${this.eyes}`);
//   }
// }

export class Tiger extends Animal {
  run(): void {
    console.log(`Tiger : sight is ${this.eyes}`);
  }
}
