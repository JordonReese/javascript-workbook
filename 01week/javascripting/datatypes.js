'use strict'

/**
Write a JavaScript program to display the current day and time.
Write a JavaScript program to convert a number to a string.
Write a JavaScript program to convert a string to the number.
Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String
Write a JavaScript program that adds 2 numbers together.
Write a JavaScript program that runs only when 2 things are true.
Write a JavaScript program that runs when 1 of 2 things are true.
Write a JavaScript program that runs when both things are not true.
**/

function currentDate() {          // displays the current date and time
  const date = new Date();
  return date;
}
console.log(currentDate());

function convertToString() {      // converts a number into a string
  const number = 10;
  const string = number.toString();
  return string;
}
console.log(convertToString());

function convertToNumber() {      // convert a string to a number
  const string = '27';
  const number = parseInt(string);
  return number;
}
console.log(convertToNumber());

function showMeTheData() {        // displays what data type each element is
  console.log(typeof true);
  console.log(typeof null);
  console.log(typeof 27);
  console.log(typeof 0/0);
  console.log(typeof 'JR');
}
console.log(showMeTheData());

function adding() {              // displays the sum of two numbers
  const num1 = 10;
  const num2 = 20;
  const total = num1 + num2;
  return total;
}
console.log(adding());

function alwaysTrue() {         // only runs when both items are true
  const yes1 = true;
  const yes2 = true;
  while (yes1 && yes2 === true) {
    return "It's working!!";
  }
}
console.log(alwaysTrue());

function onlyOneIsTrue() {      // only runs when one item is true
  const yes1 = true;
  const no1 = false;
  while (yes1 && no1 != true) {
    return "I love lamp";
  }
}
console.log(onlyOneIsTrue());

function alwaysFalse() {        // only runs when both items are false
  const false_1 = false;
  const false_2 = false;
  while (false_1 != true && false_2 != true) {
    return "Whiskey is liquid sunshine";
  }
}
console.log(alwaysFalse());
