/*
    @params - Start Numbers , End Number, Required Random Numbers
    @Output - Generate Unique number of Required Random Numbers between S & E
*/

function getRandomNumbers(SN, EN, RN) {
  var randomNumbers = [];
  while (randomNumbers.length <= RN) {
    let randomNumber = Math.floor(SN + Math.random() * (EN - SN));
    if (randomNumbers.indexOf(randomNumber) < 0) {
      randomNumbers.push(randomNumber);
    }
  }
  console.log(randomNumbers);
  return randomNumbers;
}
getRandomNumbers(5, 15, 4);
getRandomNumbers(16, 40, 10);
