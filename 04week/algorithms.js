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
    if (arr[i] > arr[i+1]) {
      swap = true;
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      }
    }
    if(swap) {
      return bubbleSort(arr);
    }
    return arr;
  }



function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle,arr.length);

  return merge(mergeSort(left),mergeSort(right));
}

function merge(lefty, righty) {
  const result = [];
  while (lefty.length && righty.length) {
    if (lefty[0] <= righty[0]) {
      result.push(lefty.shift());
    } else {
      result.push(righty.shift());
    }
  }
  while (lefty.length) {
    result.push(lefty.shift());
  }
  while (righty.length) {
    result.push(righty.shift());
  }
  return result;
}


function binarySearch(array, item, start = 0, end = array.length-1) {
  // struggling with the logic on this
  // keep getting Maximum call stack size exceeded
  // recursion isn't dropping out correctly
  // also having issue with item being in larger half of array
  const middle = Math.floor(start + (end - start) / 2);
  if (item == array[middle]) return middle;
  else if (start >= end) return false;
  else if (item < array[middle]) return binarySearch(array, item, start, middle-1);
  else if (item > array[middle]) return binarySearch(array, item, middle + 1, end);
  else return false;
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

  console.log('Run the tests!')


}
