let nanArray = [NaN];

console.log(nanArray[0] === NaN);
// The above line of code will output false because NaN is the only type of 
// value that compares unequal to itself.

// A reliable way to test if a value is NaN is using the methods isNan() or
// Number.isNaN() .