let munstersDescription = "The Munsters are creepy and spooky.";
let munstersDescriptionArray = munstersDescription.split('');
let result = [];

for (let i = 0; i < munstersDescriptionArray.length; i++) {
  if (munstersDescriptionArray[i].toLowerCase() === munstersDescriptionArray[i]) {
    result.push(munstersDescriptionArray[i].toUpperCase());
  } else if (munstersDescriptionArray[i].toLowerCase() !== munstersDescriptionArray[i]) {
    result.push(munstersDescriptionArray[i].toLowerCase());
  } else result.push(munstersDescriptionArray[i]);

}

console.log(result.join(''));

// console.log(munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join(""));