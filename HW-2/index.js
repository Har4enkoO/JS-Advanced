let startNumber = +prompt("Введіть нижнє ціле значення");
while (
  isNaN(startNumber) ||
  !Number.isInteger(startNumber) ||
  startNumber == "" ||
  startNumber < 0
) {
  startNumber = +prompt(
    "Введіть корреектне нижнє ціле значення. Має бути ціле число Та більше за нуль!! "
  );
}

let endNumber = +prompt("Введіть верхнє ціле значення");
while (
  isNaN(endNumber) ||
  !Number.isInteger(endNumber) ||
  endNumber == "" ||
  endNumber < startNumber
) {
  endNumber = +prompt(
    "Введіть корреектне верхнє ціле значення. Має бути ціле число та більше за нижнє число!!"
  );
}

const INCLUDE_EVEN = confirm("Чи необхідно враховувати парні значення");

let result = 0;
if (INCLUDE_EVEN) {
  for (let i = startNumber; i < endNumber + 1; i++) {
    result += i;
  }
} else if (INCLUDE_EVEN == false && startNumber % 2 == 0) {
  for (let i = startNumber + 1; i < endNumber + 1; i += 2) {
    result += i;
  }
} else {
  for (let i = startNumber; i < endNumber + 1; i += 2) {
    result += i;
  }
}
document.writeln("Сума всіх вибраних значень = " + result);
