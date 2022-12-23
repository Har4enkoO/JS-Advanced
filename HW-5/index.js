//Task #1
const getRandomArray = (length, min, max) => {
  let result = [];
  for (i = 0; i < length; i++) {
    result = [
      ...result,
      Math.round(min - 0.5 + Math.random() * (max - min + 1)),
    ];
  }
  return result;
};

//Task #2
const getModa = (...numbers) => {
  let result = {};
  numbers.forEach((el) => {
    if (Number.isInteger(el)) {
      result[el] ? (result[el] += 1) : (result[el] = 1);
    }
  });
  const moda = Object.entries(result).sort((a, b) => b[1] - a[1])[0][0];
  return moda;
};

//Task #3
const getAverage = (...numbers) => {
  let count = numbers.length;
  const sum = numbers.reduce((acc, el) => {
    if (Number.isInteger(el)) {
      return acc + el;
    } else {
      count -= 1;
      return acc;
    }
  }, 0);
  const avgNumber = sum / count;
  return avgNumber;
};

//Task #4
const getMedian = (...numbers) => {
  const sortedNumbers = numbers
    .filter((el) => Number.isInteger(el))
    .sort((a, b) => a - b);
  console.log(sortedNumbers);
  if (sortedNumbers.length % 2 !== 0) {
    const index = Math.ceil(sortedNumbers.length / 2);
    const median = sortedNumbers[index];
    return median;
  } else {
    const index1 = sortedNumbers.length / 2 - 1;
    const index2 = sortedNumbers.length / 2;
    const median = (sortedNumbers[index1] + sortedNumbers[index2]) / 2;
    return median;
  }
};

//Task #5
const filterEvenNumbers = (...numbers) => {
  const filteredArr = numbers.filter((el) => el % 2 === 1);
  return filteredArr;
};

//task #6
const countPositiveNumbers = (...numbers) => {
  const count = numbers.reduce((acc, el) => {
    if (el > 0) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return count;
};

//Task #7
const getDividedByFive = (...numbers) => {
  const filtered = numbers.filter((num) => num % 5 === 0);
  return filtered;
};

//Task #8
const replaceBadWords = (string) => {
  const bedWords = ["fuck", "shit", "kid"];
  const correctedString = string.split(" ").map((word) => {
    for (i = 0; i < bedWords.length; i++) {
      if (word.toLowerCase().includes(bedWords[i])) {
        word = word
          .toLowerCase()
          .replace(bedWords[i], "*".repeat(bedWords[i].length));
      }
    }
    return word;
  });
  return correctedString.join(" ");
};

//Task #9
const divideByThree = (word) => {
  let wordToWork = word;
  let result = [];
  while (wordToWork.length > 3) {
    result = [...result, wordToWork.slice(0, 3)];
    wordToWork = wordToWork.slice(3);
  }
  result = [...result, wordToWork];
  return result;
};

// Task #10
const generateCombinations = (word) => {
  if (word.length < 2) {
    return word;
  }
  let permutationsArray = [];
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length);
    for (let permutation of generateCombinations(remainingChars)) {
      permutationsArray = [...permutationsArray, char + permutation];
    }
  }
  return permutationsArray;
};

document.writeln(`Завдання №1: ${getRandomArray(10, 1, 100)}`, "<br />");
document.writeln(
  `Завдання №2: ${getModa(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )}`,
  "<br />"
);
document.writeln(`Завдання №3: ${getAverage(0, 100, 3.75)}`, "<br />");
document.writeln(`Завдання №4: ${getMedian(4, 3, 2, 1, 5, 6.5)}`, "<br />");
document.writeln(
  `Завдання №5: ${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9)}`,
  "<br />"
);
document.writeln(
  `Завдання №6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6, 5, -5)}`,
  "<br />"
);
document.writeln(
  `Завдання №7: ${getDividedByFive(
    6,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )}`,
  "<br />"
);
document.writeln(
  `Завдання №8: ${replaceBadWords("Are you fucking kidding?")}`,
  "<br />"
);
document.writeln(`Завдання №9: ${divideByThree("commander")}`, "<br />");
document.writeln(`Завдання №10: ${generateCombinations("man")}`, "<br />");
