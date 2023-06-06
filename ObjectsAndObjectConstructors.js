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
    //like object literals, you can use functions
    this.sayName = function(){
        console.log(name)
    }
}

//call the constructor by using the 'new' keyword
const player1 = new Player('clive', 'X')

