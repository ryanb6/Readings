// Flattening
//use reduce method alongside concat method to 'flatten' an array of Arrays
//into a single array that has all the elements of the original Arrays
arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr.reduce((a, b) => a.concat(b)));


// Your Own loop
//write a higher order function loop that provides something like a for Loop
//takes value, test function, update function, body function
//Each iteration, it first runs the test function on the current loop value
//and stops if that returns false. Then it calls the body function, giving it the
//current value. Finally, it calls the update function to create a new value and
//starts from the beginning.
//When defining the function, you can use a regular loop to do the actual
//looping.
function loop(start, test, update, body){
  for(let value = start; test(value); value = update(value)){
    body(value);
  }
}
loop(0, n => n < 10, n => n + 1, console.log);

// Everything
// every returns true when a function returns true for every element in an array
//implement every as a function that takes an array and a predicate function
// write one using a loop and one using the some method

let arr2 = [1,2,3,4,5];

function every1(array, test){
  for (let element of array){
    if (!test(element)) return false;
  }
  return true;
}
function every2(array, test){
  return !array.some(element => !test(element));
}

console.log(every1(arr2, a => a > 0));
console.log(every2(arr2, a => a > 0));
