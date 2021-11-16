
let counter = 0;

function getData(){
    console.log('fetch data.....', counter++);
}

const deBounce = function(fn, d){
    let timer;
    return function(){
        let context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context)
        }, d)
    }


}



const debounceIt = deBounce(getData, 300)