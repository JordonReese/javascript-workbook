'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // build the board and the arrays to hold numbers
  let board = [];
  let solution = '';
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

  generateSolution();
  document.getElementById("submit").addEventListener("click", () =>{
    const guessing = document.getElementById("guess")
    const myGuess = guessing.value;

    mastermind(myGuess);
  });
  // Building out a random solution for each game
  function generateSolution() {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, numbers.length);
      solution += numbers[randomIndex];
    }
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function generateHint(myGuess) {
    let exactMatch = 0;
    let correctNumber = 0;
    let matchIndex = -1;
    let solutionArr = solution.split('');
    let myGuessArr = myGuess.split('');

    // This piece of code tests for exact match
    myGuessArr.forEach((numbers, index) => {
      if (numbers === solutionArr[index]) {
        exactMatch++;
        solutionArr[index] = '';
        myGuessArr[index] = '';
      }
    });
    myGuessArr.forEach((number) => {
      // number might be null
      if (number) {
        // finding a match
        matchIndex = solutionArr.indexOf(number);
        // match found
        if (matchIndex !== -1) {
          correctNumber++
          // clear values
          solutionArr[matchIndex] = '';
        }
      }
    });

    alert(`Correct Number and Position ${exactMatch} - Correct Number ${correctNumber}`);
  }

  function mastermind(guess) {
    board[board.length] = `${guess}  :  ${generateHint(guess)}`;
    if (guess === solution) {
      alert(`Congragulations, you've won!`);
    }
    return false;
  }
});
