function MaxSubArraySum(nums, size){
    if(size <0 || size> nums.length) return null
    let currentSum = 0
    let maxSum = -Infinity

    for(let i=0; i< nums.length; i++){
        currentSum += nums[i]
        if(i >= size-1){
            maxSum = Math.max(currentSum, maxSum)
            currentSum -= nums[i-(size-1)]
        }
    }
    return maxSum
}

console.log(MaxSubArraySum([1,2,3,5,4,8,6,2],3))