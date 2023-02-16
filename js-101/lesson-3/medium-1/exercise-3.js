function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor--;
  }
  return factors;
}

console.log(factors(5));

// This piece of code - number % divisor === 0 - determines whether the result of the
// division is an integer, if it is then the number divided by the divisor is a factor.
