function getOccurenceCount(str, ch) {
  let obj = {};
  str.split("").forEach((element) => {
    obj[element] ? (obj[element] = obj[element] + 1) : (obj[element] = 1);
  });

  return obj[ch];
}
getOccurenceCount("qwertytreeeey", "e"); //5

function getOccurenceCountofMaxChar(str, ch) {
  let obj = {};
  let maxCount = -Infinity;
  let maxChar = "";
  str.split("").forEach((element) => {
    obj[element] ? (obj[element] = obj[element] + 1) : (obj[element] = 1);
  });

  for (var o in obj) {
    if (maxCount < obj[o]) {
      maxChar = o;
      maxCount = obj[o];
    }
  }
  console.log(maxChar);
  return maxChar;
}
getOccurenceCountofMaxChar("qwertytreeeey"); //e
