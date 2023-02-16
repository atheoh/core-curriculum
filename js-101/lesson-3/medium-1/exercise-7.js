let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// The output of the following code will be 34. When answer is passed to messWithIt
// as an argument it is passed by value which means that the function parameter
// someNumber copies the value of the variable answer that was declared and initialized
// on line 1. Now the function parameter someNumber and the variable answer hold 
// the same value but in different spaces in memory so the two variables are
// independent of each other. Because of that, the reassignment of someNumber to a 
// new value on line 4 doesn't affect the value of the variable answer. 
// The only reassignment that happens to the value of answer is on line 9,
// resulting in the value of 34. 