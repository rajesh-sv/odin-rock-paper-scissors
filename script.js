let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const roundDetailsDiv = document.querySelector('.round-details');
const runningScoreDiv = document.querySelector('.running-score');
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const gameEndDiv = document.querySelector('.game-end');

buttons.forEach(button => button.addEventListener('click', () => playRound(button.value)))

function playRound(playerChoice) {
  if (isGameOver()) cleanUp();
  const computerChoice = getComputerChoice();
  let roundDetails;
  if (playerChoice === computerChoice) {
    roundDetails = { draw: true, result: null, winningChoice: null, losingChoice: null };
  } else if (playerChoice === "rock") {
    roundDetails = computerChoice === "scissors" ?
      { draw: false, result: "Win", winningChoice: "Rock", losingChoice: "Scissors" } : { draw: false, result: "Lose", winningChoice: "Paper", losingChoice: "Rock" };
  } else if (playerChoice === "paper") {
    roundDetails = computerChoice === "rock" ?
      { draw: false, result: "Win", winningChoice: "Paper", losingChoice: "Rock" } : { draw: false, result: "Lose", winningChoice: "Scissors", losingChoice: "Paper" };
  } else {
    roundDetails = computerChoice === "paper" ?
      { draw: false, result: "Win", winningChoice: "Scissors", losingChoice: "Paper" } : { draw: false, result: "Lose", winningChoice: "Rock", losingChoice: "Scissors" };
  }
  displayRoundDetails(roundDetails);
}

function cleanUp() {
  roundDetailsDiv.textContent = "";
  runningScoreDiv.textContent = "";
  playerScoreDiv.textContent = "";
  computerScoreDiv.textContent = "";
  gameEndDiv.textContent = "";
  playerScore = 0;
  computerScore = 0;
}

function getComputerChoice() {
  random_choice = Math.floor(Math.random() * 3) + 1;
  return random_choice === 1 ?
    "rock" : random_choice === 2 ?
      "paper" : "scissors";
}

function displayRoundDetails(roundDetails) {
  roundDetailsDiv.textContent = (roundDetails.draw) ? "Draw!" : `You ${roundDetails.result}! ${roundDetails.winningChoice} beats ${roundDetails.losingChoice}`;
  updateRunningScore(roundDetails);
  displayRunningScore();
  if (isGameOver()) {
    displayGameResults();
  }
}

function updateRunningScore(roundDetails) {
  if (!roundDetails.draw) {
    if (roundDetails.result === "Win") {
      ++playerScore;
    } else {
      ++computerScore;
    }
  }
}

function displayRunningScore() {
  runningScoreDiv.textContent = "Running Score";
  playerScoreDiv.textContent = `Player: ${playerScore}`;
  computerScoreDiv.textContent = `Computer: ${computerScore}`;
}

function displayGameResults() {
  if (playerScore > computerScore) {
    gameEndDiv.textContent = "Victory! The Force is with you."
  } else if (playerScore < computerScore) {
    gameEndDiv.textContent = "Defeat! May the Force be with you.";
  } else {
    gameEndDiv.textContent = "Draw! Master the Force.";
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}