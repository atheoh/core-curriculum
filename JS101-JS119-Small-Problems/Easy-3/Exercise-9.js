let cleanUp = str => {
  let arr = str.split("");
  let alphNum = "()`~!@#$%^&*-+=|\{}[]:;'<>.?/_,.";
  let alphNumArr = alphNum.split("");
  let testArr = []; 

  for(let i = 0; i < arr.length; i++) {
    if((alphNumArr.indexOf(arr[i]) >= 0) || arr[i] === 0) {
      testArr.push(" ");
    } else testArr.push(arr[i]);
   }

   let finalArr = [];

   for(let i = 0; i < testArr.length; i++) {
    if(testArr[i] === " " && testArr[i] === testArr[i + 1]) {
      continue;
    }
    else if(testArr[i] === " " && testArr[i] !== testArr[i + 1]) {
      finalArr.push(testArr[i]);
    }
    else finalArr.push(testArr[i]);
   }

   return `"${finalArr.join("")}"`;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "