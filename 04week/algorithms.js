'use strict';

const assert = require('assert');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(0, 10));
}

function bubbleSort(arr) {
  let swap = false;
  for (let i = 0; i < arr.length; i++) {
    for (let n = i+1; n < arr.length; n++) {
      if (arr[i] > arr[n]) {
        let temp = arr[i];
        arr[i] = arr[n];
        arr[n] = temp;
      }
    }
  }
}



function mergeSort(arr) {
  // Your code here
}

function binarySearch(arr, item) {
  // Your code here
}

// Tests

if (typeof describe === 'function') {

  function comparator(a, b) {
    if (Number(a) < Number(b)) return -1;
    if (Number(a) > Number(b)) return 1;
    return 0;
  }

  describe('#bubbleSort()', () => {
    it('should sort array', () => {
      const sorted = bubbleSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#mergeSort()', () => {
    it('should sort array', () => {
      const sorted = mergeSort(arr);
      assert.deepEqual(sorted, arr.sort(comparator));
    });
  });

  describe('#binarySearch()', () => {
    it('should return the index of given item if sorted array contains it', () => {
      const idx = binarySearch([1, 2, 3, 4], 3);
      assert.equal(idx, 2);
    });
    it('should return false if item not in sorted array', () => {
      const idx = binarySearch([1, 2, 3, 4], 5);
      assert.equal(idx, false);
    });
  });

} else {
  bubbleSort(arr);
  console.log('Run the tests!')
  console.log(arr);

}
