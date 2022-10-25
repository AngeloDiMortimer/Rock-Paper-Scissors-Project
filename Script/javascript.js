const array = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

let playerChoice = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // gets user string and capitalize only the first letter

let getComputerChoice = (arr) => { //Returns an index from an array at random
    return arr[~~(Math.random() * arr.length)];
};



let playRound = (computerSelection, playerSelection) => { //Plays a round of the game
    let result;
    computerSelection = getComputerChoice(array);
    playerSelection = playerChoice(prompt("Please choice Rock, Paper, or Scissors: "));

    if (computerSelection == playerSelection) {
        computerScore = ++computerScore;
        playerScore = ++playerScore;
        result = `It's a tie!\nPlayer Score:${playerScore} Computer Score: ${computerScore}`;
    } else if (
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock") 
    ) {
        computerScore = ++computerScore;
        result = `You Lose!\n${computerSelection} beats ${playerSelection}\nPlayer Score:${playerScore} Computer Score: ${computerScore}`;
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock") 
    )
    {
        playerScore = ++playerScore;
        result = `You win!\n${playerSelection} beats ${computerSelection}!\nPlayer Score:${playerScore} Computer Score: ${computerScore}`;
    } else {
        console.log("invalid input");
        stop;
    }
    return result;
};

let game = () => {
    let finalResult;
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
     }
     if (playerScore == computerScore) {
        finalResult = "In the end it's a tie! Try again!";
     } else if (playerScore >= computerScore) {
        finalResult = "You win! You are good at this don't you?";
     } else {
        finalResult = "You lose! Better luck next time";
     }
     return console.log(finalResult);
}

game();