import { open } from 'node:fs/promises';
import { isCharANumber, numbersAsString, numbers } from './number.js';
import { log } from 'node:console';

const file = await open('C:/Users/Yolokay/Desktop/adventOfCode/day1/input.txt');


const allNumbers = numbers.concat(numbersAsString);
const lines = []
let sum = 0;

for await (const line of file.readLines()) {
  lines.push(line);
}

for (const line of lines) {
  let lineDigits = []

  for (const char of line) {

    if (isCharANumber(char)) {
      lineDigits.push(char * 1);
    }

  }

  let firstDigit = lineDigits[0] * 10;
  let secondDigit = lineDigits[lineDigits.length - 1] * 1;
  let number = firstDigit + secondDigit

  sum += number;

}

console.log(`The sum of the digits is: ${sum}`);
console.log(allNumbers);