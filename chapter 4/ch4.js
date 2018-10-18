.toUpperCase() does not need any arguments because it is a method of a string

.length does not need () because it is a property of the variable

console.log(Object.keys({x: 0, y: 0, z: 2}));
 → ["x", "y", "z"]

 let objectA = {a: 1, b: 2};
 Object.assign(objectA, {b: 3, c: 4});
 console.log(objectA);
 → {a: 1, b: 3, c: 4}

arr.shift(x) removes x or the first element of the array

arr.pop() removes the last from an array!

arr.unshift(x) adds x to the beginning of the array, as opposed to push() which adds to the end

console.log([1, 2, 3, 2, 1].indexOf(2));
→ 1
// search starting from end
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
→ 3

console.log([0, 1, 2, 3, 4].slice(2, 4));
→ [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
→ [2, 3, 4]

page 72

exampleobject = {
  one: 1,
  two: 2,

}

arr = [1, 2, 3, 4]
for i in arr:
  arr.unshift(3)
  console.log(arr[i] * 2)
