// Nanna Ku Prematho Puzzle

function alive(people) {
  var key = 2;
  while (people >= key * 2) {
    key = key * 2;
  }
  return (people - key) * 2 + 1;
}
alive(100);
