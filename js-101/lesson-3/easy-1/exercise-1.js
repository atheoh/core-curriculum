/*
The code below will not raise an error. JavaScript will handle array slots 3
through 5 as empty slots.
*/

let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers[4]);

/*
Line 9 will output undefined even though the slot is empty, which means that it
doesn't have a value, not even undefined, in spite of what the line returns.
*/

console.log(numbers);