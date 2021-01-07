// #1
function FizzBuzz(num){
    for(let i=1; i<= num; i++){
        if(i%3 === 0 && i%5 === 0 ){
            console.log('FIZZBUZZ')
        }else if(i%3 === 0){
            console.log('FIZZ')
        }else if(i%5 === 0){
            console.log('BUZZ')
        }else{
            console.log(i)
        }
    }
}

FizzBuzz(20)