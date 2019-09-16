"use strict";
exports.__esModule = true;
var inheritance_1 = require("./inheritance");
// // an is an Object Reference Variable (ORV)
// let an: Animal = new Animal(4, 2); // calling Animal() will call its constructor
// an.run();
var tg = new inheritance_1.Tiger(2, 4);
tg.run();
tg.location();
var an = new inheritance_1.Tiger(2, 2);
an.run();
an.location();
