function getPlayerChoice() {
  while (true) {
    const choice = prompt('Enter your choice (rock, paper or scissors)').toLowerCase().trim();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    }
    alert('Invalid Input! Please enter a valid choice.');
  }
}

function getComputerChoice() {
  random_choice = Math.floor(Math.random() * 3) + 1;
  return random_choice === 1 ?
    "rock" : random_choice === 2 ?
      "paper" : "scissors";
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    return { draw: true, result: null, winningChoice: null, losingChoice: null };
  } else if (playerChoice === "rock") {
    return computerChoice === "scissors" ?
      { draw: false, result: "Win", winningChoice: "Rock", losingChoice: "Scissors" } : { draw: false, result: "Lose", winningChoice: "Paper", losingChoice: "Rock" };
  } else if (playerChoice === "paper") {
    return computerChoice === "rock" ?
      { draw: false, result: "Win", winningChoice: "Paper", losingChoice: "Rock" } : { draw: false, result: "Lose", winningChoice: "Scissors", losingChoice: "Paper" };
  } else {
    return computerChoice === "paper" ?
      { draw: false, result: "Win", winningChoice: "Scissors", losingChoice: "Paper" } : { draw: false, result: "Lose", winningChoice: "Rock", losingChoice: "Scissors" };
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 1; i < 6; ++i) {
    const roundDetails = playRound();
    if(!roundDetails.draw && roundDetails.result === "Win") {
       ++playerWins;
    } else {
      ++computerWins;
    }
    roundMessage = (roundDetails.draw) ? "Draw!" : `You ${roundDetails.result}! ${roundDetails.winningChoice} beats ${roundDetails.losingChoice}`;
    console.log(`ROUND ${i}: ${roundMessage}`);
  }

  if (playerWins > computerWins) {
    console.log("Victory! The Force is with you.");
  } else if (playerWins < computerWins) {
    console.log("Defeat! May the Force be with you.");
  } else {
    console.log("Draw! Master the Force.");
  }
}

game();