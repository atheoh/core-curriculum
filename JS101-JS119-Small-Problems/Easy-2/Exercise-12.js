let negative = num => {
  return Math.abs(num) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// Further exploration
let negative2 = num => num < 0 ? num : -num;

console.log(negative2(5));     // -5
console.log(negative2(-3));    // -3
console.log(negative2(0));     // -0
