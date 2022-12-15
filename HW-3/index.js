// Task #1
const getMaxDigit = (number) => {
  number = number + "";
  let maxDigit = number[0];
  for (let i = 1; i < number.length - 1; i++) {
    if (number[i] > maxDigit) {
      maxDigit = number[i];
    } else {
      continue;
    }
  }
  return maxDigit;
};

// Task #2
const pow = (number, powCount) => {
  let numberToPow = number;
  for (let i = 1; i < powCount; i++) {
    numberToPow *= number;
  }
  return numberToPow;
};

// Task #3
const correctName = (wrongName) => {
  return wrongName[0].toUpperCase() + wrongName.slice(1).toLowerCase();
};

// Task #4
const salary = (salaryWithTaxes) => salaryWithTaxes * 0.805;

// Task #5
const getRandomNumber = (startNumber, endNumber) => {
  return (
    Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber
  );
};

// Task #6

const countLetter = (letter, word) => {
  let lettersCount = 0;
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] == letter) {
      lettersCount++;
    } else {
      continue;
    }
  }
  return lettersCount;
};

// Task #7-8
const convertCurrency = (money) => {
  if (money.toUpperCase().indexOf("UAH") >= 0) {
    return +money.toUpperCase().replace("UAH", "") / 25;
  } else if (money.indexOf("$") >= 0) {
    return +money.replace("$", "") * 25;
  } else {
    alert("Wrong currency!!");
  }
};

// Task #9-10
const getRandomPassword = (digitNumber = 8) => {
  let password = "";
  for (let i = 0; i < digitNumber; i++) {
    password += Math.floor(Math.random() * 10);
  }
  return password;
};

// Task #11
const deleteLetters = (letter, word) => {
  let wordWithoutLetter = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      continue;
    } else {
      wordWithoutLetter += word[i];
    }
  }
  return wordWithoutLetter;
};

//Task 12
const isPolindrome = (word) => {
  return word.toLowerCase() === word.toLowerCase().split().reverse().join();
};

//Task 13

const deleteDuplicateLetter = (sentence) => {
  let sentenceWithoutDuplicateLetter = "";
  for (let i = 0; i < sentence.length; i++) {
    letterCount = 0;
    for (let j = 0; j < sentence.length; j++) {
      if (sentence[i].toLowerCase() === sentence[j].toLowerCase()) {
        letterCount += 1;
      }
    }
    if (letterCount < 2) {
      sentenceWithoutDuplicateLetter += sentence[i];
    }
  }
  return sentenceWithoutDuplicateLetter;
};

document.writeln(`Функция №1: ${getMaxDigit(1234567256)}`, "<br />");
document.writeln(`Функция №2: ${pow(3, 4)}`, "<br />");
document.writeln(`Функция №3: ${correctName("peTro")}`, "<br />");
document.writeln(`Функция №4: ${salary(1000)}`, "<br />");
document.writeln(`Функция №5: ${getRandomNumber(1, 10)}`, "<br />");
document.writeln(
  `Функция №6: ${countLetter("a", "alphabetatatatat")}`,
  "<br />"
);
document.writeln(`Функция №7-8: ${convertCurrency("100$")}`, "<br />");
document.writeln(`Функция №9-10: ${getRandomPassword(8)}`, "<br />");
document.writeln(
  `Функция №11: ${deleteLetters("b", "blablalblalla")}`,
  "<br />"
);
document.writeln(`Функция №12: ${isPolindrome("мадам")}`, "<br />");
document.writeln(
  `Функция №13: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`
);
