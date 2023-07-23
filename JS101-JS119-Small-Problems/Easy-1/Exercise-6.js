/*
Write a program that asks the user to enter an integer greater than 0, then asks
whether the user wants to determine the sum or the product of all numbers between 1 and
the entered integer, inclusive.
*/

let readline = require('readline-sync');

let num = parseInt(readline.question("Please enter an integer greater than 0: "));

while (num <= 0) {
  console.log("Integer must be greater than 0.");
  num = parseInt(readline.question("Please enter an integer greater than 0: "), 10);
}

let choice = readline.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

while (choice !== "s" && choice !== "p") {
  console.log(`You must enter "s" or "p" to continue.`);
  choice = readline.question(`Enter "s" to compute the sum, or "p" to compute the product. `);
}

if(choice === "s") {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
}
else {
  let product = 1;
  for(let i = 1; i <= num; i++) {
    product *= i;
  }
  console.log(`The sum of the integers between 1 and ${num} is ${product}.`);
}