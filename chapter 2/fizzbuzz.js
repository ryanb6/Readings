for(let num = 1; num <= 100; num+=1){
  let output = '';
  if(num % 3 == 0){
    output = 'Fizz';
  }else if(num % 5 == 0){
    output = 'Buzz';
  }else{
    output = num;
  }
  //console.log(output);

  //this is an alternative method that uses overloading
  console.log(output || num);
}
