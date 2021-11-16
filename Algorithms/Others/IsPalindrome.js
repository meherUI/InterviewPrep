// #1
/* Method -1
    function IsPalindrome(str){
        return str === str.split('').reverse().join('') ? true : false
    } 
*/

// Method-2 : Handle Special Characters
function IsPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
  }
   
  console.log(IsPalindrome("Madam, I'm Adam"));



console.log(IsPalindrome('baab'))
console.log(IsPalindrome('baby'))