//Unfortunately, object constructors make it easy to introduce bugs to your code

//notes from Constructors are Bad for Javascript
//there are some issues with constructors and prototypes, and the instanceOf method
//it suggests using factory functions instead of constructors
function MyObject(data) {
    this.data = data;
  }  
   
  MyObject.prototype = {
    getData: function() {
      return this.data;
    }
  }
var o = new MyObject("data");

//this constructor can be replaced with the following factory function
function myObject(data) {
    var obj = Object.create(myObject.proto);
    obj.data = data;
    return obj;
}
myObject.proto = {
    getData: function() {
        return this.data;
    }
}
var o = myObject("data");
//this function doesnt require the new keyword
//there is no pretense of capitalizing words to create pseudo class representations from other languages
//basically, constructors require the new keyword and if you forget that, difficult to trace errors can occur

//basic factory function
const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  const jeff = personFactory('jeff', 27);
  console.log(jeff.name); // 'jeff'
  jeff.sayHello(); // calls the function and logs 'hello!'

  //factories do not use prototypes, so there is a performance penalty if you are creating thousands of objects

  const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
  };
const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
//by the way, arrow functions bind 'this' to its outer scope
//they are not good for object methods, because they will exit the object scope
//arrow functions have no constructors or prototypes
//arrow functions have implicit return
//const sum = (a, b) => a + b
//however, if you want to return an object, you need to use parens
const sum = (a, b) => ({result: a + b})
sum(1, 2)
//you can omit parentheses around functions with a single parameter
const square = (x) => x * x