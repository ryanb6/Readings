//functions that are part of objects are called methods
Math.random() // returns a random value between 0 and 1,  1 NOT INCLUDED
//we can customize functions
//floor reduces a decimal to a whole number
//this will produce a random whole number between 0 and number - 1
let number = 5
Math.floor(Math.random() * number)

//function declaration
//these are hoisted, meaning you can call them above the declaration and it will work normally
function myFunction(){

}
myFunction()

//some functions needs parameters, also called arguments, properties or attributes
//some dont need any, like Math.random()
//some have default parameters
const madeAnotherString = myArray.join();
console.log(madeAnotherString); // returns 'I,love,chocolate,frogs'

//you can specify default values for parameters
function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

//you can create functions without names, called anonymous functions
//these are NOT hoisted
(function (){
    console.log('test')
})

//here is an example of a function declaration that will execute when a user presses a key
function logKey(event) {
    console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);
//here is it written with an anonymous function
textbox.addEventListener('keydown', function(event) {
    console.log(`i know what key you pressed because of the event the browser passed ${event.key}`)
})
//here it is written with an arrow function
textbox.addEventListener('keydown', (e) => {
    console.log('etc')
})
//arrow functions with one parameter dont need parens
textbox.addEventListener('keydown', e => {
    console.log(`${e.key}`)
})
//if an arrow function only needs one line, we can omit the braces
//we will be using Array.map, which creates a new array populated with the results of a function called on every element of the array
let arr = [1,2,3,4,5]
let arr2 = arr.map(x => x * 2) // 2 4 6 8 10

