function getPlayerChoice() {
  while(true) {
    const choice = prompt('Enter your choice (rock, paper or scissors)').toLowerCase().trim();
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    }
    alert('Invalid Input! Please enter a valid choice.');
  }
}

function getComputerChoice() {
  random_choice = Math.floor(Math.random() * 3) + 1;
  return random_choice === 1?
          "rock":random_choice ===2?
          "paper": "scissors";
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  if(playerChoice === computerChoice) {
    return [0, "Draw!"];
  } else if(playerChoice === "rock") {
    return computerChoice === "scissors"?
            [1, "You Win! Rock beats Scissors"]:[-1, "You Lose! Paper beats Rock"];
  } else if(playerChoice === "paper") {
    return computerChoice === "rock"?
            [1, "You Win! Paper beats Rock"]:[-1, "You Lose! Scissors beat Paper"];
  } else {
    return computerChoice === "paper"?
            [1, "You Win! Scissors beat Paper"]:[-1, "You Lose! Rock beats Scissors"];
  }
}

function game(playerChoice, computerChoice) {
  let playerWins = 0;
  let computerWins = 0;
  for(let i=1; i<6; ++i) {
    const [roundWinner, roundMessage] = playRound();
    if(roundWinner === 1) {
      playerWins += 1;
    } else if(roundWinner === -1) {
      computerWins += 1;
    }
    console.log(`ROUND ${i}: ${roundMessage}`);
  }
  if(playerWins > computerWins) {
    console.log("Victory! The Force is with you.");
  } else if(playerWins < computerWins) {
    console.log("Defeat! May the Force be with you.");
  } else {
    console.log("Draw! Master the Force.");
  }
}

game();