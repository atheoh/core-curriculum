function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// The above functions will return different results. The first function call will
// return an object while the second function call will return undefined. The second 
// function call returns undefined because the return value is not on the same line
// as the return keyword so the JavaScript engine adds a semicolon at the end of line
// 8 and returns undefined.