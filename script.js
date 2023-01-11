

function getComputerChoice() {
    let things = ['rock', 'paper', 'scissor']; //make these lowercase so its easier
    return choice = things[Math.floor(Math.random() * things.length)];
}


// Single round game function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === 'paper') {
        return "You lose!"
    } else if (playerSelection === "rock" && computerSelection === 'scissor') {
        return "You win!"
    } else if (playerSelection === computerSelection) {
        return "Draw"
    }
}

// Playing 5 rounds
//Create game function
function game() {
    // player and computer count should start at zero 
    let playerCount = 0;
    let computerCount = 0;

    const playerSelection = "RoCk".toLowerCase(); //turned lowercase 
    let computerSelection = getComputerChoice();
    
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(playerSelection, computerSelection);
        // if player wins then add 1 to player score
        if (roundResult === "You win!") {
            playerCount += 1;
        // if computer wins then add 1 to computer score
        } else if (roundResult === "You lose!") {
            computerCount += 1;
        } 
    
    
    
        console.log(roundResult);
        console.log(playerCount, computerCount);
    }

}

game();


