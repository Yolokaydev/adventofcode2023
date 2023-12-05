import { open } from 'node:fs/promises';
import { isCharANumber, numbersAsString, numbers, findAllIndexes } from './number.js';
import { log } from 'node:console';
import { Digit } from './digit.js';

const file = await open('C:/Users/Yolokay/Desktop/adventOfCode/day1/input.txt');
//const file = await open('C:/Users/Yolokay/Desktop/adventOfCode/day1/test.txt');

// const allNumbers = numbers.concat(numbersAsString);
const lines = []
let sum = 0;
//let allDigits = [];


for await (const line of file.readLines()) {
  lines.push(line);
}

for (const line of lines) {
  let allDigits = [];
  

  for (const item of numbersAsString) { 
    let indexes = findAllIndexes(line, item)

    if(indexes.length > 0){
      allDigits.push( new Digit(indexes, item))
    } 
  }

  let firstDigit = allDigits[0];
  let lastDigit = allDigits[0];

  console.log(firstDigit);
  console.log(lastDigit);



  for (const digit of allDigits) {
    // if()
  }

  // console.log(allDigits)
}

console.log(`The sum of the digits is: ${sum}`);
// console.log(new Date().getTime());
