/* 
  megre alternate strings
  add remaining
*/

function merger(str1, str2) {
  var temp = "";
  var maxString = str1.length > str2.length ? str1 : str2;
  var minString = str1.length > str2.length ? str2 : str1;
  for (let i = 0; i < str1.length; i++) {
    temp = temp + str1[i];
    for (let j = i; j <= i; j++) {
      if (str2[j]) {
        temp = temp + str2[j];
      }
    }
  }

  if (temp.length < str1.length + str2.length) {
    temp = temp + maxString.substr(minString.length);
  }

  console.log(temp);
  return temp;
}

merger("abc", "qrstuv"); // aqbrcstuv
merger("qrstuv", "abc"); // qarbsctuv

// Better Solution
function merger2(str1, str2) {
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");
  let result = [];
  while (str1Arr.length) {
    result.push(str1Arr.shift());
    if (str2Arr.length) {
      result.push(str2Arr.shift());
    }
  }
  if (str1Arr.length < str2Arr.length) {
    result.push(...str2Arr);
  }
  console.log(result.join(","));
}

merger2("abc", "qrstuv"); // aqbrcstuv
merger2("qrstuv", "abc"); // qarbsctuv
