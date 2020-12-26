function QuickSort(arr){
    if(arr.length <= 1) return arr;
    
    let pivot = arr[arr.length-1]
    let left= [];
    let right = [];

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])    
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}

QuickSort([40,23,10,45,30,49,50,20,80,75,12,60])