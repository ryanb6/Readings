//object literal syntax
const myObject = {
    property1: 'value1',
    property2: 'value2',
    "prop func": function(){
        //do stuff
    }
}

//accessing object properties
//dot notation
myObject.property1
//bracket notations
myObject['prop func']

//object constructor, tic tac toe style
function Player(name, marker) {
    this.name = name
    this.marker = marker
    //like object literals, you can use functions to make methods
    this.sayName = function(){
        console.log(name)
    }
}

//call the constructor by using the 'new' keyword
//const player1 = new Player('clive', 'X')

//Exercise: Create a constructor for Book objects. should have title, author, number of pages, and whether you have read it.
//should return theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
function Book(title, author, numPages, hasBeenRead){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.hasBeenRead = function(){
        if(hasBeenRead == true){
            return("has been read already!")
        }else{
            return("has not been read yet.")
        }
    }
    this.info = function(){
        return(`${this.title} by ${this.author}, ${this.numPages} pages, ${this.hasBeenRead()}`)
    }
}
const book1 = new Book('Heart of Darkness','Joseph Conrad',69,true)
const book2 = new Book('Melting Classroom','Junji Ito',82,false)
console.log(book1.info())
console.log(book2.info())
//it works!

//all javascript objects have a Prototype
//the prototype is another object that the original object inherits from, and has access to all its methods and properties
//getting a prototype
console.log(Object.getPrototypeOf(book1) === Book.prototype)
//this refers to book1's property of prototype, book1.prototype

function Person(name) {
    this.name = name
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
    this.name = name
    this.marker = marker
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
}

// Object.getPrototypeOf(Player.prototype) should 
// return the value of "Person.prototype" instead 
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype) // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)
console.log(Object.getPrototypeOf(Player.prototype)) // returns Person.prototype

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

player1.sayName() // Hello, I'm steve!
player2.sayName() // Hello, I'm also steve!

player1.getMarker() // My marker is 'X'
player2.getMarker() // My marker is 'O'

//notes from Digital Ocean Prototype Article

//It is common practice in JS to define methods on the prototype for increased efficiency and code readability
function Hero(name, level){
    this.name = name
    this.level = level
}
Hero.prototype.greet = function(){
    return `${this.name} says hello.`
}

//you can use call() method to copy properties from one constructor to another
function Warrior(name, level, weapon){
    //chain constructor with call
    Hero.call(this, name, level)
    this.weapon = weapon
}
//using call() does not link prototype properties and methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype)
//now Warrior can use Hero.greet()

