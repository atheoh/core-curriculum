let getGrade = (n1, n2, n3) => {
  let score = (n1 + n2 + n3) / 3;
  if(score >= 90 && score <= 100) return 'A';
  else if(score >= 80 && score < 90) return 'B';
  else if(score >= 70 && score < 80) return 'C';
  else if(score >= 60 && score < 70) return 'D';
  else return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"