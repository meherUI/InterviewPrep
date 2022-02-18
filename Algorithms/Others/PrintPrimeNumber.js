function getPrimeTill(num){
    var isPrime;
    for(var i=2; i<=num; i++){
        isPrime =1;
        for(var j=2; j<i; j++){ 
            if(i%j ==0){
                isPrime =0;
                break;
            }
    }
    if(isPrime == 1){
        console.log(i)
    }
}
}
getPrimeTill(15)