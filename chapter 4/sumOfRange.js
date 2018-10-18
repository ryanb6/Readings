function rangeOf(start, end, step = 1){
  let ret = [];
  let i = start;
  if(step > 0){
    for (i; i <= end; i+=step){
      ret.push(i);
    }
  }else{
    for(i; i >= end; i+=step){
      ret.push(i);
    }
  }

  return ret;
}

function arrSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
}

console.log(rangeOf(1, 10));

arr = rangeOf(1,10);
console.log(arrSum(arr));

console.log(rangeOf(1, 10, 2));
console.log(rangeOf(5, 2, -1));
