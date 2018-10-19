require('./scripts.js');


let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

//console.log(sum(range(1, 10)));

//these two 'programs' produce the same output but are implemented differently
//the second is preferable because it expresses simpler concepts
//and is less likely to introduce bugs

//this demonstrates the benefits of abstracting your code
//as long as you understand what the abstractions will entail.

//here is a for loop
for (let i = 0; i < 10; i++){
  console.log(i);
}

//here is an abstracted for loop
function repeatLog(n){
  for (let i = 0; i < n; i++){
    console.log(i);
  }
}

//here is a loop that can be combined with any Function
function repeat(n, action){
  for (let i = 0; i < n; i++){
    action(i);
  }
}
repeat(10, console.log);

//nor does repeat need a Function
//make sure you use backticks when you want string interpolation
let labels = []
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

//Higher Order Functions operate on other functions or take them as arguments
function greaterThan(n){
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even

//here is a filter function that shows which scripts are still in use
//uses 'test', a function value, to fill a gap in the computation
//this function builds a new array, so it is considered pure
function filter(array, test){
  let passed = [];
  for (let element of array){
    if (test(element)){
      passed.push(element);
    }
  }
  return passed;
}
console.log(filter(SCRIPTS, script => script.living));

//however, filter is a standard array method
//the previous example was to show how it works
//here is the normal usage
//wow, this is pretty awesome
console.log(SCRIPTS.filter(s => s.direction == 'ltr'));

//the map method transforms an array by applying a function to all of its elements
//and building a new array
function map(array, transform){
  let mapped = [];
  for (let element of array){
    mapped.push(transform(element));
  }
  return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction = 'rtl');
console.log(map(rtlScripts, s => s.name));

//this should provide the same functionality, similar to the previous filter example
console.log(rtlScripts.map(s => s.name));

//reduce takes an array, a combining argument, and a start value
//and produces a single value
function reduce(array, combine, start){
  let current = start;
  for (let element of array){
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

//the stanard array reduce takes the first element as a default arg
console.log([1,2,3,4].reduce((a, b) => a + b));

//finding the largest character set of a script
//this function reduces the ranges of the scripts by summing their sizes
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
//this call to reduce finds the largest by repeatedly comparing two scripts
console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));

//higher order functions are useful when you need to compose operations
//here is a function that finds the average age of all the SCRIPTS
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));
