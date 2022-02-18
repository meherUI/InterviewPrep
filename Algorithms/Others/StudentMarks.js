/* 
Given a list of N students, every student is marked for M subjects. Each student is denoted by an index value. 
Their teacher Ms. Margaret must ignore the marks of any 1 subject for every student. For this she decides to ignore 
the subject which has the lowest class average.
Your task is to help her find that subject, calculate the total marks of each student in all the other subjects and then 
finally return the array of the total marks scored by each student. 

Input Specification:
    input1:
        An integer value N denoting number of students

    input2:
        An integer value M denoting number of subjects

    input3:
        A 2-D integer array of size N'M containing the marks of all students in each subject.

Output Specification:

    Return an integer array of size N containing the total marks of each student afte deducting the score for that one subject.

*/

var marksOfStudents = [
  [75, 76, 65, 87, 87],
  [78, 76, 68, 56, 89],
  [67, 87, 78, 77, 65],
];

var numOfStudents = 3;
var numOfSubjects = 5;

/* 
  var marksOfStudents = [
    [50, 30, 70],
    [30, 70, 99],
    [99, 20, 30],
  ];
  var numOfStudents = 3;
  var numOfSubjects = 3; */

let avg = new Array(numOfSubjects).fill(0);
for (let stu of marksOfStudents) {
  avg = mergeAndAdd(avg, stu);
}
function mergeAndAdd(arr1, arr2) {
  var result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }

  return result;
}

console.log(avg);

let leastAvg = Math.min(...avg);
let leastAvgIndex = avg.indexOf(leastAvg);

var totalMarksOfEach = [];
marksOfStudents.forEach((arr) =>
  totalMarksOfEach.push(
    arr.reduce((acc, cv) => {
      return acc + cv;
    }, 0) - arr[leastAvgIndex]
  )
);
console.log(totalMarksOfEach);
