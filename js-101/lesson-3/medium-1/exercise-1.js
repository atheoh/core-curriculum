let counter = 10;
let padding = 0;
let string = "The Flintstones Rock!";

// console.log(string.padStart(string.length + 1, " "));

while (counter) {
  console.log(string.padStart(string.length + padding, " "));
  padding++;
  counter--;
}