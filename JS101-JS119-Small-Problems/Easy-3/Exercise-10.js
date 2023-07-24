let century = year => {

  let centuryNum = Math.floor(year / 100) + 1;

  if(year % 100 === 0) {
    centuryNum -= 1;
  }

  return String(centuryNum) + centurySuff(centuryNum);
}

let centurySuff = centuryNum => {

  if(endsWithTh(centuryNum % 100)) {
    return "th";
  }


  let lastDigit = centuryNum % 10;

  switch (lastDigit) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default : return "th"; 
  }
} 

let endsWithTh = lastTwo => {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"