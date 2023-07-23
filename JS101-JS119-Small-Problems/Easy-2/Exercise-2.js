let readline = require('readline-sync');

let name = readline.question("What is your name? ");

if(name.charAt(name.length - 1) === "!") {
  console.log(`HELLO ${name.substring(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
}
else {
  console.log(`Hello ${name}.`);
}