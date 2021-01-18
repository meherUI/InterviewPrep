/* Method -1
function BinarySearch(val, arr){
    let low = 0
    let high = arr.length-1
    let mid;
    let element;

    while(low <= high){
        mid = Math.floor((low+high)/2,10)
        element = arr[mid]
        if(element <key){
            low = mid+1
        }else if(element >key){
            high = mid-1
        }else{
            return mid
        }
    }
    return -1;
} */

// #1
function BinarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return BinarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return BinarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}
 
BinarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);