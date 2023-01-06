
function getComputerChoice() {
    let things = ['rock', 'paper', 'scissor']; //make these lowercase so its easier
    return choice = things[Math.floor(Math.random() * things.length)];
}

getComputerChoice(); //call function to test 'choice' console after using console.log

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === 'paper') {
        return "You lose! paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === 'scissor') {
        return "you win!"
    } else if (playerSelection === computerSelection) {
        return "Draw"
    }

   

}

const playerSelection = "RoCk".toLowerCase(); //turned lowercase 
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));