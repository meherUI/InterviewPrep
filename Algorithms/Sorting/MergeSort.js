function MergeSort(arr){
    if(arr.length <=1)  return arr
    
    let length = arr.length
    let middle = Math.floor(length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return merge(MergeSort(left), MergeSort(right))
}

function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                result.push(left[leftIndex])
                leftIndex++
            }else{
                result.push(right[rightIndex])
                rightIndex++
            }
        }     
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

MergeSort([99,44,6,2,1,5,63,87,283,4,0])
