function getHumanChoice() {
  const humanChoice = prompt("Choose Rock, Paper or Scissors");
  return humanChoice;
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  }

  if (randomNumber === 1) {
    return "paper";
  }

  if (randomNumber === 2) {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanChoiceSafe = humanChoice.toLowerCase();

    if (humanChoiceSafe === computerChoice) {
      console.log("Its a Draw");
    } else if (humanChoiceSafe === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("Rock Beats Scissors - You Win!");
    } else if (humanChoiceSafe === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("Paper Beats Rock - You Win!");
    } else if (humanChoiceSafe === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("Scissors Beats Paper - You Win!");
    } else if (humanChoiceSafe === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("Paper Beats Rock - Computer Wins!");
    } else if (humanChoiceSafe === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("Scissors Beats Paper - Computer Wins!");
    } else if (humanChoiceSafe === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("Rock Beats Scissors - Computer Wins!");
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (humanScore < computerScore) {
    console.log("Computer Wins!");
  } else {
    console.log("Its A Draw!");
  }
}

playGame();
