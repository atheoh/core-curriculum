let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let lowerCaseString = string => {
  let stringArray = string.split(' ');

  let lowerString = (stringArray.map(el => el.toLowerCase())).join(' ');
  let finalString = lowerString[0].toUpperCase().concat(lowerString.slice(1));
  console.log(finalString);

};

lowerCaseString(munstersDescription);

// munstersDescription.charAt(0).toUpperCase() +
//   munstersDescription.substring(1).toLowerCase();