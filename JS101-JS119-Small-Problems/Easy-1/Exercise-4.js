/*
Build a program that asks the user to enter the length and width of a room in meters,
and then logs the area of the room to the console

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt
method to collect user input.
*/

let readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

console.log("Type meters or feet to calculate the area accordingly: ");
let choice = readline.prompt();

while (choice !== "meters" && choice !== "feet") {
  console.log("You must type either meters or feet!");
  choice = readline.prompt();
}

if(choice === "meters") {
  console.log("Enter the length of the room in meters: ");
  let length = Number(readline.prompt());

  console.log("Enter the width of the room in meters: ");
  let width = Number(readline.prompt());
  
  let areaInMeters = length * width;
  console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters.`);
}
else if(choice === "feet") {
  console.log("Enter the length of the room in feet: ");
  let length = Number(readline.prompt());

  console.log("Enter the width of the room in feet: ");
  let width = Number(readline.prompt());
  
  let areaInFeet = length * width * SQMETERS_TO_SQFEET;
  console.log(`The area of the room is ${areaInFeet.toFixed(2)} square feet.`);
}

// let length = Number(readline.question("Enter the length of the room in meters: "));

// let width = Number(readline.question("Enter the width of the room in meters: "));

// let areaInMeters = length * width;
// let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET;

//console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);