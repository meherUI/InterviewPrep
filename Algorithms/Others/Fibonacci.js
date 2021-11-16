function Fibonacci(position){
    if(position < 3) return 1
    else return Fibonacci(position-1) + Fibonacci(position-2) 
}

Fibonacci(9) // Time Complexity O(2^n) - Bad/ Worse

function MemoizedFibonacci(index,cache){
    // index: index of number in Fibonacci sequence 
    // cache: an array used as memory
    cache = cache || []
    if(cache[index]) return cache[index]
    else{
        if(index<3) return 1;
        else{
            cache[index] = MemoizedFibonacci(index-1, cache)+ MemoizedFibonacci(index-2, cache);
        }
    }
    return cache[index];

}


function myFibonacci(position){
    let fibArr = [1,1];
    for(let i=2; i<position; i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2])
    }
    return fibArr.pop()
}

