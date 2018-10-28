function countBs(str){
  let count = 0;
  for(let i = 0; i < str.length; i += 1){
    if(str[i] == 'B') count += 1;
  }
  return count;
}

function countBs2(strr){
  return countChar(strr, 'B');
}

function countChar(str, char){
  let count = 0;
  for(let i = 0; i < str.length; i += 1){
    if(str[i] == char) count += 1;
  }
  return count;
}

console.log(countBs("this has three bs BBB"));
console.log(countChar("5 cs CCCCC", "C"));
console.log(countBs2("4 bs BBBB"));
