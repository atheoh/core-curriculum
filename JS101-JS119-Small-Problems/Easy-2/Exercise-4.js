let multiply = (num1, num2) => num1 * num2;

let square = num => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Further exploration (Will come back to this later)

let powerToTheN = (num, n) => {
  let result = 1;
  
  if(n === 0) return 1;
  else if(n === 1) return num;
  else if(n === 2) return multiply(num, num);
  else {
    for(let i = 1; i < n; i++) {
      result *= multiply(num, num);
    }
    return result;
  }
}

console.log(powerToTheN(2, 4));