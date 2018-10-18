//These could be replaced by the reverse() method

//takes array as arg and returns new array
function reverseArray(arr){
  let ret = [];
  for (let i = arr.length - 1; i >= 0; i--){
    ret.push(arr[i]);
  }
  return ret;
}

//returns original array
function reverseArrayInPlace(arr){
  let temp = null;
  let middle = Math.floor(arr.length / 2);
  for (let i = 0; i < middle; i++){
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

arr = [1,2,3,4,5,6];
console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));

//reverseArrayInPlace is faster because it only iterates through half the array, 
