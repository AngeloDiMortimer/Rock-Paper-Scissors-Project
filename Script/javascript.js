let playerScore = 0;
let computerScore = 0;
//button selectors
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const outcomeDiv = document.querySelector('#outcome');
const p = document.createElement('p');

let computerPlay = () => { //gets the choice of the computer
    const array = ["Rock", "Paper", "Scissors"];
    const randomNum = ~~(Math.random() * array.length);
    return array[randomNum];
};


let playRound = (computerSelection, playerSelection) => { //Plays a round of the game

    if (computerSelection == playerSelection) { //It's a tie

        p.innerText = `It's a tie! You both picked ${playerSelection}`;

    } else if ( //Player loses
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock") 
    ) {
        computerScore++;
        p.innerText = `You Lose!\n${computerSelection} beats ${playerSelection}`;
    } else if ( //Player wins
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock") 
    )
    {
        playerScore++;
        p.innerText = `You win!\n${playerSelection} beats ${computerSelection}!`;
    } 
    outcomeDiv.appendChild(p);
    
};

const checkForWinner = (playerScore, computerScore) => { //Chequea quien fue el ganador de la ronda
    const h2 = document.createElement('h2');

    if (playerScore === 5) {
        h2.classList.add('player-won');
        h2.innerText = `You won! ${playerScore} to ${computerScore} great job beating the computer!`
    }
    if (computerScore === 5) {
        h2.classList.add('computer-won');
        h2.innerText = `You lost! ${playerScore} to ${computerScore} great job at losing to the computer!`
    }
    outcomeDiv.appendChild(h2);
    
};

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    computerScoreSpan.innerText = `Player Score: ${computerScore}`;
};

//Evento cuando se pulsan los botones
rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Rock';
    playRound(computerSelection, playerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Paper';
    playRound(computerSelection, playerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Scissors';
    playRound(computerSelection, playerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});
