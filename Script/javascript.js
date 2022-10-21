const array = ["Rock", "Paper", "Scissors"];

let getComputerChoice = (arr) => { //Returns an index from an array at random
    return arr[~~(Math.random() * arr.length)];
};

console.log(getComputerChoice(array));