let input = 15
for(let i = 1; i <= input; i++){
	if(i % 5 === 0){
        if(i % 3 === 0){
            console.log(i + ' fizzbuzz')
            continue
        }
        console.log(i + ' Buzz')
    } else if(i % 3 === 0){
        console.log(i + ' Fizz')
    }
}
