let penultimate = str => {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

let middleWord = str => {
  let arr = str.split(' ');

  if(str.length === 0) {
    return "The string that you entered is empty";
  }
  else if(arr.length === 1) {
    return arr[0];
  }
  else if(arr.length  % 2 === 0){
    return "The string that you entered contains an even number of words so it doesn't have a middle word.";
  }
  else {
    return arr[ (arr.length - 1) / 2];
  }
}

console.log(middleWord("My name is Alex."));
console.log(middleWord("My dogs name is Milo."));
console.log(middleWord("I want to learn good study habits!"));