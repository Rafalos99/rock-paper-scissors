const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector("#results");



//! Computer choice
function getComputerChoice() {
    let things = ['rock', 'paper', 'scissors']; //make these lowercase so its easier
    return choice = things[Math.floor(Math.random() * things.length)];
}


//! This function plays a single round
function playRound(playerSelection, computerSelection) {
    if
    //define the three win states
        ((playerSelection === "rock" && computerSelection === 'scissors') //rock beats scissors
        || (playerSelection === "paper" && computerSelection === "rock") //paper beats rock
        || (playerSelection === "scissors" && computerSelection === "paper") //scissors beats paper
        ) { return "You win!"
    } else if (playerSelection === computerSelection) {
        return "Draw"
    } else {
        return "You lose!"
    }
}

//! Using buttons to choose 'rock, paper or scissors'
buttons.forEach(button => { //loop through buttons
  button.addEventListener('click', () => {
    const playerSelection = button.textContent.toLowerCase(); //takes the text content of the buttons as the player selection in lower case
    const computerSelection = getComputerChoice(); //random computer selection
    const roundResult = playRound(playerSelection, computerSelection); //call the playround function
    console.log(roundResult); //check 'win, draw loss' outcome
  });
});

//! This function plays x number of rounds using the single round 'playRound' function
//Create game function
function game(x) {
    // player and computer count should start at zero 
    let playerCount = 0;
    let computerCount = 0;

    // for loop to run x amount of rounds
    for (let i = 0; i < x; i++) {
        if (playerSelection === null || playerSelection === '' ) {
            return;
        } 


        // call single game function inside loop 
        let roundResult = playRound(playerSelection, computerSelection);

        // if player wins then add 1 to player score
        if (roundResult === "You win!") {
            playerCount += 1;

        // if computer wins then add 1 to computer score
        } else if (roundResult === "You lose!") {
            computerCount += 1;
        } 

        //display results of each round
        console.log(playerCount, computerCount);
    }
}





