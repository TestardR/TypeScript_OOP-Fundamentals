import { Animal } from './cls';
import { Tiger } from './inheritance';

// // an is an Object Reference Variable (ORV)
// let an: Animal = new Animal(4, 2); // calling Animal() will call its constructor
// an.run();

let tg: Tiger = new Tiger(2, 4);
tg.run();
tg.location();

let an: Animal = new Tiger(2, 2);
an.run();
an.location();
