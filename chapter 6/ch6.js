//seems like this chapter will focus on OOP
//The main idea behind OOP is to divide programs into smaller pieces
//and have these pieces be responsible for their own state

//different pieces of a program interact with each other through interfaces
//these are abstract methods that hide their exact implementation

//though JS doesnt have private/public vars, an _ is set before 'private' variables
//separating interface from implementation is called encapsulation

let rabbit = {};
rabbit.speak = function(line){
  console.log(`the rabbit says ${line}`);
}
rabbit.speak("Im alive");

//when a function is called as an object.method, this points to the object it was called on
function speak(line){
  console.log(`the ${this.type} says ${line}.`);
}
let whiteRabbit = {type: "white rabbit", speak};
let brownRabbit = {type: "brown rabbit", speak};

whiteRabbit.speak("im wearing my off whites");
brownRabbit.speak("i am colored brown");

//using a function's call method uses the this value as its first arg
speak.call(whiteRabbit, "I am still wearing my off whites bro");

//arrow functions do not bind their own this but can see the this of functions around them
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]

// Prototypes
let empty = {};
console.log(empty.toString);
console.log(empty.toString());
// a prototype is another object that is used as a fallback source of properties
// functions derive from the function prototype, arrays from the array Prototype
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

//you can use Object.create to create an object with a specific Prototype
let protoRabbit = {
  speak(line){
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKREEEE');
// here we can see that the killer rabbit has its own properties (type)
// but shares the object expression 'speak' with others of the rabbit prototype

// a constructor function creates an instance of a class.
// in JS we use prototypes. other langueages have actual classes
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
//just kidding, in 2015 we have a class notation
class Rabbit {
  constructor(type){
    this.type = type;
  }
  speak(line){
    console.log(`The ${this.type} rabbit says '${this.line}'`);
  }
}
let murderousRabbit = new Rabbit('murderous');
let blackRabbit = new Rabbit('black');
console.log(Object.getPrototypeOf(Rabbit));
//unfortunately, class declarations can only contain methods

//this is pretty self explanatory
//called overriding properties
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth); // small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth); // long sharp bloody
console.log(blackRabbit.teeth); // small
console.log(Rabbit.prototype.teeth); // small

//this is a map, not to be confused with map()
let ages = {
Boris: 39,
Liang: 22,
Júlia: 62
};
console.log(`Júlia is ${ages["Júlia"]}`); // 62
console.log("Is Jack's age known?", "Jack" in ages); // false
console.log("Is toString's age known?", "toString" in ages); //true
//toString is true because the Object prototype has toString property
//this seems a little dangerous, having a prototype like that
console.log("toString" in Object.create(null)); //false

//JS has the Map class
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`); // 62
console.log("Is Jack's age known?", ages.has("Jack"));//false
console.log(ages.has("toString")); //false

//set, get and has are part of the Map interface
//if you need to use a regular object as a map, use hasOwnProperty
console.log({x: 1}.hasOwnProperty("x")); //true
console.log({x: 1}.hasOwnProperty("toString")); //false

//polymorphism - creating a toString interface for the rabbit prototype
//calling String() will call the toString method on the Object
//but here we have defined protoRabbit's own toString method
Rabbit.prototype.toString = function() { return `a ${this.type} rabbit`; };
console.log(String(blackRabbit));

//symbols are ways to name properties. They can have the same name, but not the same symbol

let sym = Symbol("name");
console.log(sym == Symbol("name")); //false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]); //55

const toStringSymbol = Symbol("toString");
  Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString()); //1,2
console.log([1, 2][toStringSymbol]()); //2 cm of blue yarn

//iterator is a property of a symbol function as well
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next()); //{value: "O", done: false}
console.log(okIterator.next()); //{value: "K", done: false}
console.log(okIterator.next()); //{value: undefined, done: true}
