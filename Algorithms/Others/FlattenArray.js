/* 
    Flatten an Array
    
*/
var test = [1, 2, 3, [4, 5, [6, 7]]];
const flattenv = (arr) => {
  let result = [];

  if (!Array.isArray(arr)) {
    return arr;
  }

  for (let data of arr) {
    result = result.concat(flattenv(data));
  }

  return result;
};
console.log(flattenv(test));
