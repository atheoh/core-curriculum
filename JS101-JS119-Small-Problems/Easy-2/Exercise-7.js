let xor = (arg1, arg2) => {
  if ( (arg1 && !arg2) || (!arg1 && arg2) ) return true;
  else return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true