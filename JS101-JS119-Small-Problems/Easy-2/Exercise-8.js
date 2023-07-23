let oddities = arr => {
  let result = [];
  for(let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Further Exploration

let evenities = arr => {
  let evenNumbers = [];
  for(let i = 1; i < arr.length; i += 2) {
    evenNumbers.push(arr[i]);
  }

  return evenNumbers;
}

console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs []
console.log(evenities([])); // logs []