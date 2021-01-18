// https://www.youtube.com/watch?v=gJOgI8TpSgc&list=PLZlA0Gpn_vH8ShxSPO48q8u0SeQBuCdnN&index=2
let longestCommonPrefix = function(strs){
    let prefix = ''
    if(strs.length === 0) return prefix

    for(var i=0; i<strs[0].length; i++){
        const character = strs[0][i]
        for(var j=1; j<strs.length; j++){
            if(strs[j][i] !== character) return prefix            
        }
        prefix = prefix + character
    }  
    return prefix
}


console.log(longestCommonPrefix(['apple','apply','application','ape','a']))
console.log(longestCommonPrefix(['flower','flow','flight']))