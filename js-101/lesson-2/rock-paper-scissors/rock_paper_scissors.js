const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

let prompt = message => console.log(`=> ${message}`);

let playerWins = (choice, computerChoice) => {
  return WINNING_COMBOS[choice].includes(computerChoice);
};

let displayWinner = (choice, computerChoice) => {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if  (playerWins(choice, computerChoice)) {
    return 'You win!';
  } else if (choice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }
};

let condition = true;
let playerWinsCounter = 0;
let computerWinsCounter = 0;

while (condition) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}.`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  // let randomIndex = Math.ceil(Math.random() * (VALID_CHOICES.length - 1));
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let winner = displayWinner(choice, computerChoice);
  prompt(winner);

  if (winner === 'You win!') playerWinsCounter++;
  else if (winner === "Computer wins!") computerWinsCounter++;

  if (playerWinsCounter === 3) {
    playerWinsCounter = 0;
    computerWinsCounter = 0;
    prompt("You are the grand winner!");
  } else if (computerWinsCounter === 3) {
    playerWinsCounter = 0;
    computerWinsCounter = 0;
    prompt("The computer is the grand winner!");
  }

  prompt("Do you want to play again (y/n)?");
  let playAgain = readline.question().toLowerCase();

  while (playAgain[0] !== 'y' && playAgain[0] !== 'n') {
    prompt("Answer by entering 'y' or 'n'.");
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain[0] === 'n') {
    condition = false;
  }
}