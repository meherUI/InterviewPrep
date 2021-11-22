function createSubArray(arr, num) {
  // sort arr and remove numbers less than num
  let newArr = arr.sort().filter((nu) => nu < num);
  let tempArr = [...newArr];
  let result = [];
  tempArr.forEach((cv) => {
    let subArr = [];
    let remaining = num - cv;
    if (newArr.indexOf(remaining) > 0) {
      subArr.push(newArr.shift());
      subArr.push(tempArr[tempArr.indexOf(remaining)]);
      result.push(subArr);
    }
  });
  console.log(result);
}

createSubArray([1, 2, 3, 4, 5, 6], 6); // [[1,5],[2,4]]
createSubArray([1, 2, 3, 4, 5, 6, 7, 8], 7); // [[1,6],[2,5],[3,4]]
createSubArray([8, 4, 1, 3, 2, 5, 7, 6], 6); // [[1,6],[2,5],[3,4]]
