/* 
    @params : str
    @outout : boolean

    check if string doesnt have 3 consecutive integers
*/
function checkIfNoConsecutiveNum(str) {
  // Remove spaces from string
  let newString = str.replace(/ /g, "");
  let size = 3;
  let currentStr = "";
  let result = true;

  // Loop over each elements
  for (let i = 0; i < newString.length; i++) {
    currentStr += newString[i];
    if (currentStr.length >= size) {
      if (!isNaN(currentStr)) {
        result = false;
      }
      currentStr = currentStr.substr(1);
    }
  }
  console.log(result);
  return result;
}

checkIfNoConsecutiveNum("2erth 67rty 1tye");
checkIfNoConsecutiveNum("2erth 678ty 1tye");
