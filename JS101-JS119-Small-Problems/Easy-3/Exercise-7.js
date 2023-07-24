let twice = n => {
  let str = n.toString();
  let firstHalf = str.substring(0, Math.floor(str.length / 2));
  //console.log(firstHalf);
  let secondHalf = str.substring(Math.floor((str.length ) / 2), str.length);
  //console.log(secondHalf);
  if(firstHalf === secondHalf) {
    return n;
  }
  else {
    return 2*n;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
