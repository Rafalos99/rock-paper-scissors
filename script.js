
function getComputerChoice() {
    let things = ['rock', 'paper', 'scissor']; //make these lowercase so its easier
    return choice = things[Math.floor(Math.random() * things.length)];
}

getComputerChoice(); //call function to test 'choice' console after using console.log

//! Single round game function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === 'paper') {
        return "You lose!"
    } else if (playerSelection === "rock" && computerSelection === 'scissor') {
        return "You win!"
    } else if (playerSelection === computerSelection) {
        return "Draw"
    }
}

//! Playing 5 rounds
//Create game function
function game(playerSelection, computerSelection) {
    // player and computer count should start at zero 
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        // call rules function made previously into for loop
        playRound; 
        // if player wins then add 1 to player score
        if (playRound === "You win!") {
            playerCount += 1;
            console.log(playerCount)
        // if computer wins then add 1 to computer score
        } else if (playRound === "You lose!") {
            computerCount += 1;
            console.log(computerCount)
        } else {
            prompt("game over");
        }
            
    }
}

const playerSelection = "RoCk".toLowerCase(); //turned lowercase 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



