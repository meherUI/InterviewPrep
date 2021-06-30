// https://www.youtube.com/watch?v=gJOgI8TpSgc&list=PLZlA0Gpn_vH8ShxSPO48q8u0SeQBuCdnN&index=2
let longestCommonPrefix = function(arr){
    let prefix = ''
    if(arr.length === 0) return prefix

    for(var i=0; i<arr[0].length; i++){
        const character = arr[0][i]
        for(var j=1; j<arr.length; j++){
            if(arr[j][i] !== character) return prefix            
        }
        prefix = prefix + character
    }  
    return prefix
}


console.log(longestCommonPrefix(['apple','apply','application','ape','a']))
console.log(longestCommonPrefix(['flower','flow','flight']))