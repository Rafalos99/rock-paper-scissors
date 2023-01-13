

function getComputerChoice() {
    let things = ['rock', 'paper', 'scissors']; //make these lowercase so its easier
    return choice = things[Math.floor(Math.random() * things.length)];
}


//! This function plays a single round
function playRound(playerSelectionLowerCase, computerSelection) {
    if
    //define the three win states
        ((playerSelectionLowerCase === "rock" && computerSelection === 'scissors') //rock beats scissors
        || (playerSelectionLowerCase === "paper" && computerSelection === "rock") //paper beats rock
        || (playerSelectionLowerCase === "scissors" && computerSelection === "paper") //scissors beats paper
        ) { return "You win!"
    } else if (playerSelectionLowerCase === computerSelection) {
        return "Draw"
      } else {
        return "You lose!"
        }
}

//! This function plays x number of rounds using the single round 'playRound' function
//Create game function
function game(x) {
    // player and computer count should start at zero 
    let playerCount = 0;
    let computerCount = 0;

    // for loop to run x amount of rounds
    for (let i = 0; i < x; i++) {
        // prompt player choice every round
        playerSelection = prompt("Pick your choice");
        if (playerSelection === null || playerSelection === '' ||) {
            return;
        } else {
            playerSelectionLowerCase = playerSelection.toLowerCase();
        }

        // computer choice every round
        let computerSelection = getComputerChoice();

        // call single game function inside loop 
        let roundResult = playRound(playerSelectionLowerCase, computerSelection);

        // if player wins then add 1 to player score
        if (roundResult === "You win!") {
            playerCount += 1;

        // if computer wins then add 1 to computer score
        } else if (roundResult === "You lose!") {
            computerCount += 1;
        } 

        //display win,loss or draw placed into roundResult from playRound
        console.log(roundResult);
        //display results of each round
        console.log(playerCount, computerCount);
    }
}


game(5);


