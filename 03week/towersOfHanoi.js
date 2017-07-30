'use strict';

// adding some comments here at the top
// it's 10pm on a saturday...I'm inside working on homework : /
// someone please save me

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // pop off a value from the starting stack and save it to a variable
  // then push that to the endStack
  let start = stacks[startStack].pop();
  stacks[endStack].push(start);
}

function isLegal(startStack, endStack) {
  // set legal to false and return legal at end to see if valid move
  let legal = false
  let startBlock = stacks[startStack][stacks[startStack].length - 1]
  let endBlock = stacks[endStack][stacks[endStack].length - 1]
  if (stacks[endStack].length >= 0) {
    legal = true;
  }
  if (startBlock < endBlock) {
    legal = true;
  }
  if (startBlock > endBlock) {
    legal = false;
  }
  return legal;
}

function checkForWin(endStack) {
  // moving all numbers to stack c is the only way to win
  // check that everything is in final stack
  // declare winner
  if (stacks['c'].length === 4) {
    console.log("You Won!!!")
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  // main function to run all other functions out of
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin(endStack);
  } else {
    console.log('That move is not legal, please make another');
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
