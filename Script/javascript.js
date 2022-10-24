const array = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

let playerChoice = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // gets user string and capitalize only the first letter

let getComputerChoice = (arr) => { //Returns an index from an array at random
    return arr[~~(Math.random() * arr.length)];
};



let playRound = (computerSelection, playerSelection) => {
    computerSelection = getComputerChoice(array);
    playerSelection = playerChoice(prompt("Please choice Rock, Paper, or Scissors: "));
    return playerSelection;
};
