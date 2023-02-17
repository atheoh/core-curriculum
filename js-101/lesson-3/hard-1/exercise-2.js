let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Line 6 will output { first: [1, 2] } . This happens because when the variable
// numArray is declared and initialized to the value of the property of "object" on
// line 1, both "numArray" and "first" point to the same array [1] because arrays are objects
// and objects are passed by reference. On line 3, the value of numArray is mutated
// but since both "numArray" and "first" reference the same array, now both "first"
// and "numArray" point to the same mutated array [1, 2].