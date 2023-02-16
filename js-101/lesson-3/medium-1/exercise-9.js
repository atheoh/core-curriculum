function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

/*
1. rps("rock", "paper") --> "paper"  
2. rps("rock", "scissors") --> "rock"
 
rps(1, 2) --> rps("paper", "rock") --> "paper"
rps("paper", "rock") --> "paper" 
rps("paper") --> "paper"

Line 11 outputs "paper".
*/