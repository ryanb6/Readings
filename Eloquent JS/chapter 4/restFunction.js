function max(...numbers){
  let result = 0;
  for (let number of numbers){
    if (number > result) result = number;
  }
  return result;
}


console.log(max(4, 2, 1, 5, 7));
// 7

arr = [1, 2, 6, 3, 5];

console.log(max(...arr));
// 6
