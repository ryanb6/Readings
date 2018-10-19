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
