// https://www.youtube.com/watch?v=JWIg8ShWuW0&feature=youtu.be9
function firtMissingPositive(nums){
    for(let i=0; i<nums.length; i++){
      while(
          nums[i]>0 &&
        nums[i] <= nums.length &&
        nums[nums[i]-1] !== nums[i]
      ){
        swap(nums,i,nums[i]-1)
      }
    }
    
    for(let j=0; j<nums.length; j++){
      if(nums[j] !== j+1){
        return j+1
      }
    }
     
    return nums.length+1
    
  }
  
  var swap = function(arr, fidx, sidx){
    var temp = arr[fidx];
    arr[fidx] = arr[sidx];
    arr[sidx] = temp
    
  }
  
  
  
  
  console.log(firtMissingPositive([2, 3, -7, 6, 8, 1, -10, 15 ])) // 4
  console.log(firtMissingPositive([0, 10, 2, -10, -20])) // 1
  console.log(firtMissingPositive([1, 1, 0, -1, -2 ])) // 2