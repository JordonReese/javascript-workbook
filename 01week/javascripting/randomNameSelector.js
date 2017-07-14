'use strict'

/**
pick a random student from this class

store names in a variable - use an array

generate a random number, 0 - less that amount in class

apply index to array

from that array, pick a random name

return a name
**/

const studentArray = ['Ryan B', 'Cristian', 'Trevor', 'Craig', 'Alison', 'Renata', 'Eddie', 'Cameron'];

function randomNumberInRange(top, bottom) {
  return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}
console.log(randomNumberInRange(14,0));
function generateRandomName() {
  const index = randomNumberInRange(studentArray.length - 1, 0);
  return studentArray[index];
}

console.log(generateRandomName());
