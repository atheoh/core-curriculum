/*
Mortgage / Car loan calculator that calculates the amount of monthly payments.
*/

let readline = require('readline-sync');

let prompt = message => console.log(`=> ${message}`);

prompt("Enter loan amount:");
let loanAmount = Number(readline.question());

while (loanAmount < 0 ) {
  prompt("Enter an amount that is more than 0:");
  loanAmount = Number(readline.question());
}

prompt("Enter the APR:");
let apr = Number(readline.question());

while (apr < 0 ) {
  prompt("Enter an interest rate that is more than 0% .");
  apr = Number(readline.question());
}

prompt("Loan term (years):");
let loanDurationInYears = Number(readline.question());

while (loanDurationInYears < 0 ) {
  prompt("Enter a number that is more than 0.");
  loanDurationInYears = Number(readline.question());
}

prompt("Loan term (months):");
let loanDurationInMonths = Number(readline.question());

while (loanDurationInMonths > 12 || loanDurationInMonths < 0) {
  prompt("Enter a number betweem 0 and 12 months.");
  loanDurationInMonths = Number(readline.question());
}

let monthlyInterest = (apr / 100) / 12;
let finalDurationInMonths = (loanDurationInYears * 12) + loanDurationInMonths;

let monthlyPayment = loanAmount * (monthlyInterest /
(1 - Math.pow((1 + monthlyInterest), (-finalDurationInMonths))));

prompt(`Monthly payment: $${monthlyPayment.toFixed(2)}`);