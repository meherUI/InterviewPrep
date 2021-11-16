function BubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]){
                const temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }        
        }        
    }
    return arr
}

BubbleSort([99,44,6,2,1,5,63,87,283,4,0])