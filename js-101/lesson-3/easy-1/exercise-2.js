let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

let hasExcl = string => console.log(string[string.length - 1] === '!');

hasExcl(str1);
hasExcl(str2);


// str1.endsWith("!"); // true
// str2.endsWith("!"); // false