
function getComputerChoice() {
    let things = ['rock', 'paper', 'scissor']; //make these lowercase so its easier
    return choice = things[Math.floor(Math.random() * things.length)];
}

getComputerChoice(); //call function to test 'choice' console after using console.log

//! Game Rule set
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === 'paper') {
        return "You lose! paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === 'scissor') {
        return "you win!"
    } else if (playerSelection === computerSelection) {
        return "Draw"
    }
}

//! Playing 5 rounds
//Create game function
function game() {
    // player and computer count should start at zero 
    let playerCount = 0;
    let computerCOunt = 0;
    for (let i = 0; i < 5; i++) {
        playRound; //call rules function made previously into for loop
        // if player wins then 
            
    }
}

const playerSelection = "RoCk".toLowerCase(); //turned lowercase 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));