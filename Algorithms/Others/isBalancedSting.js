function isBalanced(str) {
  let openings = ["[", "{", "("];
  let closings = ["]", "}", ")"];
  let result = false;

  if (closings.indexOf(str[0]) > 0) {
    return false;
  }

  let strArr = str.split("");
  while (strArr.length > 1) {
    openings.forEach((op, i) => {
      strArr.splice(strArr.lastIndexOf(op), 1);
      strArr.splice(strArr.lastIndexOf(closings[i]), 1);
    });
  }
  if (strArr.length === 0) {
    result = true;
  }

  console.log(result);
}
isBalanced("}{}[]");
isBalanced("[{()}]"); // true
isBalanced("[{}{()]"); // false
isBalanced("[{}{()[]]}"); // true
