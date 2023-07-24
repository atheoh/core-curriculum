let stringy = num => {
  let arr = [];
  
  for(let i = 0; i < num; i++) {  
    if(arr.length === 0) {
      arr.push("1");
    }
    else if(arr[i - 1] === "1") {
      arr.push("0");
    }
    else {
      arr.push("1");
    }
  }

  return arr.join("");
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"