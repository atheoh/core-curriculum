// Method 1:
let numbers = [1, 2, 3, 4];
console.log(numbers);

while (numbers.length) {
  numbers.pop();
}

console.log(numbers);

// Method 2:
numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.splice(0, numbers.length);
console.log(numbers);

// Method 3:
numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.length = 0;
console.log(numbers);
