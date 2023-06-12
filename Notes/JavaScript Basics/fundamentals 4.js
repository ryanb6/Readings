//arrays
//create an array and reference certain values
let arr = ['one','two','three']
console.log(arr[0]) // one

//convert array to string
arr.toString() // 'one,two,three'

//get length of array
arr.length // 3

//access the last element
arr[arr.length - 1]
arr[-1]

//looping
arr.forEach(function(value){
    console.log(value)
})

//add element to end of list
arr.push('four')

//be careful
//create an array with one element
const points = [40]
//create and array with 40 elements
const points2 = new Array(40);

arr.typeof //this returns object, use isArray instead
Array.isArray(arr)

//join() joins elements of an array together
arr.join(" * ") // 'one * two * three * four

//remove the last element of an array
arr.pop() //four

//remove the first element and shift all other elements to a lower index
arr.shift()

//add element to beginning of array and shift all elements down
arr.unshift()

//using javascripts delete operator will leave undefined holes in an array
delete arr[2]

//combine two arrays or strings together
//concat doesnt change the original arrays, it makes a new one
let arr2 = ['1','2','3']
//let arr3 = arr1.concat(arr2)

//flatten, or reduce the dimensionality of an array
//[[1,2],[3,4],[5,6]].flat() //[1,2,3,4,5]

//splice adds new elements into an array
//first parameter is index where items are added
//second param is how many items should be removed
//rest of the parameters is what to add
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango

//create a new array by removing elements from another
//doesnt change original array
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1); //Orange,Lemon,Apple,Mango
//can include the number of elements to slice, or if no param is given, it will be the rest of the array

//iterate through an array and perform a function on each item
//map returns new items for array
function toUpper(string) {
    return string.toUpperCase();
  }
fruits.map(toUpper)

//or filter elements by some crtieria
//filter returns a boolean
function lCat(cat) {
    return cat.startsWith("L");
}
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered = cats.filter(lCat);

let TestObject = function(name, age) {
    this.name = name
    this.age = age
}

let t1 = new TestObject('ryan', 3)
let t2 = new TestObject('zidane', 7)
let arr_t = []
arr_t.push(t1)
arr_t.push(t2)
for(let item of arr_t){
    console.log(item.name)
    console.log(item.age)
}
//use for...of loops for arrays
//for...in loops are used for generic objects

//TDD or test driven development refers to the practice of writing automated tests that described how your code should work

//a fork is a new repository that shares code and visibility settings with the upstream repository
//you can fork a repo, fix an issue, then submit a pull request to the project owner
