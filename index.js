

const getData = () => {
    console.log('fectching data...')
}

const debounce = (fn, d) => {

    let timer
    return function(){
        const context = this
        clearTimeout(timer)
       time =  setTimeout(() => {
            fn.apply(context)
        },d)
    }

} 


const debouncingData = debounce(getData, 300)