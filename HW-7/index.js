const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Task 1
function getMyTaxes(salary) {
  return salary * this.tax;
}
console.log("Податок від будь якої ЗП", getMyTaxes.call(ukraine, 2000));

//Task 2
function getMiddleTaxes() {
  return this.middleSalary * this.tax;
}
console.log("Середній податок в країні", getMiddleTaxes.call(ukraine));

//Task 3
function getTotalTaxes() {
  return this.middleSalary * this.tax * this.vacancies;
}
console.log("Всього податків", getTotalTaxes.call(ukraine));

//Task 4
function getMySalary() {
  let result = {};
  let randomSalary = Math.round(1500 + Math.random() * 500);
  result.salary = randomSalary;
  result.taxes = (this.tax * randomSalary).toFixed(2);
  result.profit = (result.salary - result.taxes).toFixed(2);
  return result;
}
console.log("Дані про мою ЗП", getMySalary.call(ukraine));
const intervalTask = setInterval(
  () => console.log("Дані про мою ЗП", getMySalary.call(ukraine)),
  10000
);
