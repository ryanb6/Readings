//here is an example of a list object
//each object in the list holds a reference to the next objectA
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}
let list2 = {
  value: 0,
  rest: list
}
let list3 = {
  value: -1,
  rest: list
}

//build a list structure from an array
function arrayToList(arr){
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--){
    list = {value: arr[i], rest: list};
  }
  return list;
}

//return an array from a list
function listToArray(list){
  let arr = [];
  for (let node = list; node != null; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}

//adds element to front of list
function prepend(value, list){
  return {value, rest: list};
}

//returns nth value
function nth(list, index){
  if (!list) return undefined;
  else if (index == 0 ) return list.value;
  else return nth(list.rest, index - 1)
}

//takes two values and returns true only if they are the same value
//or are objects with the same properties where the properties are also equal
function deepEqual(a, b){
  if(a === b){
    return true;
  }else if(a === b){
    return true;
  }else{
    return false;
  }
}

objA = {
  first: "ryan",
  middle: "f",
  last: "brady"
}
objB = {
  first: "ryan",
  middle: "f",
  last: "brady"
}
objC = {
  first: "hugh",
  middle: "f",
  last: "mosher"
}
console.log(deepEqual(1,1));
console.log(deepEqual(objA, objB));

console.log(list);
console.log(list2);
console.log(list3);
arr = [1,2,3]

console.log(arrayToList(arr));
console.log(listToArray(list));
console.log(prepend(0, list));
console.log(nth(list, 0));
