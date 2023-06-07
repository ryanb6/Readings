//variables can be assigned with let, and can be reassigned
let num = 1
num = 2
console.log(num) // 2
otherNum = num
console.log(otherNum) // 2

//consts cant be reassigned
const num_const = 3
num_const = 2 // error, cant reassign constant

//some use constants as aliases for hard to remember values
//typically only used on values that are known before execution
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

//postfix increment and prefix increment both increase a variable
let counter = 0
//postfix increment will return the value before increment
counter++
console.log(counter) // 2
//prefix increment will return the value after increment
++counter
console.log(counter) // 2