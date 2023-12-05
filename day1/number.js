export function isCharANumber(char) {
  return /^\d$/.test(char);
}

export function findAllIndexes(mainString, subString) {
  const indexes = [];
  let currentIndex = mainString.indexOf(subString);

  while (currentIndex !== -1) {
    indexes.push(currentIndex);
    currentIndex = mainString.indexOf(subString, currentIndex + 1);
  }

  return indexes;
}



export const numbersAsString = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",

]
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(isNumber(str[0])); // 👉️ false