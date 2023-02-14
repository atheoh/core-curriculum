console.log("--------- REVERSE METHOD --------- ");
let numbers = [1, 2, 3, 4, 5];
let reversedCopy = numbers.map(word => word).reverse();
console.log(numbers);
console.log(reversedCopy); // [ 5, 4, 3, 2, 1 ]

console.log("--------- SORT METHOD --------- ");
numbers = [1, 2, 3, 4, 5];
let reversedCopy2 = numbers.map(word => word).sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(reversedCopy2); // [ 5, 4, 3, 2, 1 ]

console.log("--------- BONUS QUESTION ---------");

numbers = [1, 2, 3, 4, 5];
let reversedCopy3 = [];

numbers.forEach(number => reversedCopy3.unshift(number));
console.log(numbers);
console.log(reversedCopy3); // [ 5, 4, 3, 2, 1 ]

// Reverse method
// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = numbers.slice().reverse();
// console.log(reversedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]

// Sort method
// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]

