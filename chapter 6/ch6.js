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
