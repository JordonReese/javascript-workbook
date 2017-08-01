'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess, solution) {
  // hints will consist of two numbers (2-2)
  // the first number is the amount of correct letters
  // the second number is the amount of letters in the correct position

  // split both guess and solution into arrays for iteration
  guess = guess.split('');
  solution = solution.split('');

  // compare guess[0] to solution[i]
  // first check that guess[0]] exist in solution array
  // if guess[0]] is located in solution index
  //    add one to the corrLetter accumulator
  // then check if guess[0] is located in solution[0]
  //    add one to the corrPosition accumulator
  // repeat loop for all letters in guess array against solution array

  // initialize the variables corrLetter and corrPostions as accumulators
  // since these variable would possibly change each round let seemed best
  let corrLetter = 0;
  let corrPosition = 0;
  for (let i = 0; i < solution.length; i++) {
    if (guess.indexOf(solution[i]) > -1) {
      corrLetter++;
    }
    if (guess[i] === solution[i]){
      corrPosition++;
    }
  }

  return corrLetter + '-' + corrPosition;
}

function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution

  // check for correct solution
  if (guess === solution) {
    console.log(`You guessed correct!`);
    process.exit();
  }

  // print out number of corrLetter/corrPosition (corrLetter - corrPosition)
  // since hint would change each round let seemed the best solution
  let hint = generateHint(guess, solution);
  board.push(hint + ': ' + guess);
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(guess);
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();

  // added a few instructions for new players
  console.log(`Welcome to Mastermind`);
  console.log(`The object of the game is to guess the letter combination`);
  console.log(`Hints are Correct Letters - Correct Position`);
  console.log(`Good luck!`);
  getPrompt();
}
