let crunch = str => {
  let arr = str.split("");
  let finalArr = [arr[0]];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] === arr[i - 1]) {
      continue;
    }
    else {
      finalArr.push(arr[i]);
    }
  }

  return finalArr.join("");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(`"${crunch('')}"`);                    // ""

// Further Exploration