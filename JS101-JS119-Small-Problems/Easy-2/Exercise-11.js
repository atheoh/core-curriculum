let centerOf = str => {
  if(str.length % 2 !== 0) {
    return str[(str.length - 1) / 2];
  }
  else return str[Math.floor((str.length - 1) / 2)].concat(str[Math.floor((str.length - 1) / 2) + 1]);
}

console.log(`"${centerOf('I Love JavaScript')}"`); // "a"
console.log(`"${centerOf('Launch School')}"`);     // " "
console.log(`"${centerOf('Launch')}"`);            // "un"
console.log(`"${centerOf('Launchschool')}"`);      // "hs"
console.log(`"${centerOf('x')}"`);                 // "x"