let readline = require('readline-sync');

let age = Number(readline.question("What is your age? "));
let targetAge = Number(readline.question("At what age would you like to retire? "));

console.log(`It's 2023. You will retire in ${(targetAge - age) + 2023}.`);
console.log(`You only have ${targetAge - age} years of work to go!`);