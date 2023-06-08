//data types
//numbers
let n = 123
n = 1.34

//BigInt
//javascript cant represent numbers larger than 9007199254740991
//BigInt was made to reprent integers of arbitrary length
//append an 'n' to the end
const bigInt = 119294949494838393934875859558n

//string
let str = "hello"
//double " " and single ' ' quotes are practically the same and called simple quotes

//backticks ` ` have extended functionality and allow us to embed variables and expressions
console.log(`${str} John`) // hello John
console.log(`the result is ${1+2}`) // the result is 3

//boolean logical type
//true and false
let isGreater = 4 > 1
console.log(isGreater) // true

//null
//reference to a non-existing object. also known as a null pointer
let age = null

//undefined value
//value is not assigned
let name
console.log(name) // undefined

//objects
//all other types are considered primitive because they contain only one thing
//objects are used to store collections of data and more complex things

//symbol
//used to create unique identifiers for objects

//typeof
//typeof operator returns the type of the operand
typeof 0 // number
typeof Math // object

//escaping characters in a string
//use backslashes
console.log('I\'ve got no place to call home')

//you can add breaks in strings with \n

