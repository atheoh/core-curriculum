/*
Ask the user for the first number.
Ask the user for the second number.
Ask the user for an operation to perform.
Perform the operation on the two numbers.
Print the result to the terminal.
*/

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let language = 'en';

let invalidNumber = number => number.trimStart() === '' || Number.isNaN(Number(number));

let messages = (message, lang) => {
  return MESSAGES[lang][message];
}

let prompt = key => {
  let lang = language;
  let message = messages(key, lang);
  console.log(`=> ${message}`);
}

prompt('preferredLang');
language = readline.question();

while (!['en', 'es', 'fr'].includes(language)) {
  prompt("validLanguage");
  language = readline.question();
}

prompt('welcome');
let name = readline.question();

while (name.trimStart() === '' || !(name.match(/^[A-Za-z]+$/))) {
  prompt('validName');
  name = readline.question();
}

while (true) {
  prompt("firstNumber");
  let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("invalidNumber");
  number1 = readline.question();
}

prompt("secondNumber");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("invalidNumber");
  number2 = readline.question();
}

//console.log(`${number1} ${number2}`);

prompt("operationChoice");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('mustChoose');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
}

prompt("result");
console.log(output);

prompt("anotherCalc");
let answer = readline.question();

while (!answer === 'No' || !answer === 'Yes') {
  prompt("yesOrNo");
  answer = readline.question();
}

if (answer !== 'Yes') {
  break;
}

}
