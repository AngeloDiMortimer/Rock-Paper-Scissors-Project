let playerScore = 0;
let computerScore = 0;
//button selectors
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

let playerChoice = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(); // gets user string and capitalize only the first letter

let computerPlay = () => { //gets the choice of the computer
    const array = ["Rock", "Paper", "Scissors"];
    const randomNum = ~~(Math.random() * array.length);
    return array[randomNum];
};


let playRound = (computerSelection, playerSelection) => { //Plays a round of the game
    if (computerSelection == playerSelection) { //It's a tie
        return `It's a tie!\nYou both picked ${playerSelection}\nPlayer Score:${playerScore} Computer Score: ${computerScore}`
    } else if ( //Player loses
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock") 
    ) {
        computerScore++;
        return `You Lose!\n${computerSelection} beats ${playerSelection}\nPlayer Score:${playerScore} Computer Score: ${computerScore}`
    } else if ( //Player wins
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock") 
    )
    {
        playerScore++;
        return `You win!\n${playerSelection} beats ${computerSelection}!\nPlayer Score:${playerScore} Computer Score: ${computerScore}`
    } 
    
};

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Rock';
    playRound(computerSelection, playerSelection);
});
