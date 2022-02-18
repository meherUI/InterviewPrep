function lengthOfLongestSubstring(s) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }
    windowCharsMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
}
lengthOfLongestSubstring("bbbbbbbbb"); //1
lengthOfLongestSubstring("abcbaaccb"); //3

function getLongestSubString(str) {
  if (!str.trim()) {
    return "Please enter string";
  }
  const strArray = str.trim().split("");
  let count = 0,
    maxLength = 0,
    index;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i + 1]) {
      count++;
    } else {
      if (count > maxLength) {
        maxLength = count;
        index = i;
      }
      count = 0;
    }
  }

  const subStrIndex = index - maxLength;
  const subString = str.slice(subStrIndex, subStrIndex + maxLength + 1);

  if (subString) {
    return { index: subStrIndex, length: maxLength + 1, subString: subString };
  }

  return "No sub-string found";
}

const str = "aabbbcd";
console.log(getLongestSubString(str)); // {index: 2, length: 3, subString: "bbb", }

var lengthOfLongestSubstring = function (s) {
  let lsc = 0;
  let lsArr = [];
  let lsTempArr = [];
  let strArr = s.split("");

  if (strArr.length !== 0) {
    lsTempArr[0] = strArr[0];
    lsArr[0] = strArr[0];

    for (let j = 0; j < strArr.length; j++) {
      for (let i = j + 1; i < strArr.length; i++) {
        if (lsTempArr.includes(strArr[i])) {
          if (lsTempArr.length >= lsArr.length) {
            lsArr = lsTempArr;
            lsTempArr = [];
            lsc = 0;
            lsTempArr[lsc] = strArr[j + 1];

            break;
          } else {
            lsTempArr = [];
            lsc = 0;
            lsTempArr[lsc] = strArr[j + 1];
            break;
          }
        } else {
          lsc++;
          lsTempArr[lsc] = strArr[i];
        }
      }
    }
  } else {
    return 0;
  }

  if (lsTempArr.length >= lsArr.length) {
    lsArr = lsTempArr;
  }

  return lsArr.join("");
};
let lcs = lengthOfLongestSubstring("pwwkew");
