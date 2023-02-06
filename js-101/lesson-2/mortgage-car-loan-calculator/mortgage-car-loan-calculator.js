/*
Mortgage / Car loan calculator that calculates the amount of monthly payments.
*/

let readline = require('readline-sync');

let prompt = message => console.log(`=> ${message}`);

let isInvalid = number => {
  return number.trim('') === '' ||
         Number(number) < 0     ||
         Number.isNaN(Number(number));
};

prompt("Welcome to calculator!");

while (true) {
  prompt("Enter loan amount:");
  let loanAmount = readline.question();

  while (isInvalid(loanAmount)) {
    prompt("Enter a positive amount:");
    loanAmount = readline.question();
  }

  prompt("Enter the APR:");
  let apr = readline.question();

  while (isInvalid(apr)) {
    prompt("Enter a positive interest rate.");
    apr = readline.question();
  }

  prompt("Loan term (years):");
  let loanDurationInYears = readline.question();

  while (isInvalid(loanDurationInYears)) {
    prompt("Enter a positive number.");
    loanDurationInYears = readline.question();
  }

  prompt("Loan term (months):");
  let loanDurationInMonths = readline.question();

  while (isInvalid(loanDurationInMonths)) {
    prompt("Enter a number positive number.");
    loanDurationInMonths = readline.question();
  }

  let monthlyInterest = (Number(apr) / 100) / 12;
  let finalDurationInMonths = (Number(loanDurationInYears) * 12)
                              + Number(loanDurationInMonths);

  let monthlyPayment = Number(loanAmount) * (monthlyInterest /
  (1 - Math.pow((1 + monthlyInterest), (-finalDurationInMonths))));

  prompt(`Monthly payment: $${monthlyPayment.toFixed(2)}`);

  prompt("Would you like to calculate another monthly payment? (y/n)");
  let answer = readline.question().toLowerCase();

  while ((answer[0] !== 'y') && (answer[0] !== 'n')) {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') {
    break;
  }
}