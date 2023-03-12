const buttons = document.querySelectorAll('.btn');
const resultsDiv = document.getElementById('results');
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const container = document.querySelector(".results-container");


let playerCount = 0; //initial player score
let computerCount = 0; //initial computer score
let drawCount = 0; //initial draw count

//! Get computer choice
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

//! Loop through buttons and play a round
function game() { 
  buttons.forEach((button) => { //loop through buttons
    button.addEventListener("click", () => {
      const playerSelectionLowerCase = button.textContent.toLowerCase(); //take text content of the button into lower case as playerSelection
      const computerSelection = getComputerChoice(); //get random computer choice
      const roundResult = playRound(playerSelectionLowerCase, computerSelection); //gets the return values from the single round function

      if (roundResult === "You win!") { //
          playerCount += 1;
          displayResults("Good job, you won a round!");
      } else if (roundResult === "You lose!") {
          computerCount += 1;
          displayResults("Oh no they got one on us!");

      } else if (roundResult === "Draw") {
          drawCount += 1;
          displayResults("Tie round!");
      }

      playerScoreSpan.textContent = playerCount; // add to player count ui
      computerScoreSpan.textContent = computerCount; // add to computer count ui

      if (isGameOver()) { // check if the game is over
            let resultText = "";
            if (playerCount > computerCount) {
            resultText = "You win the game!"; //result text to later add onto result div
            } else if (playerCount < computerCount) {
            resultText = "You lose the game!"; //result text to later add onto result div
            } else {
                resultText = "The game is a draw!"; //result text to later add onto result div
            }
            
            const restartButton = document.createElement("button"); //create restart button
            restartButton.id = "restartBtn"; //assign an ID to the button
            restartButton.textContent = "Restart"; //restart button name

            restartButton.addEventListener("click", () => {
            playerCount = 0;
            computerCount = 0;
            drawCount = 0;
            playerScoreSpan.textContent = 0;
            computerScoreSpan.textContent = 0;
            resultsDiv.textContent = "";
            game(); // start the game again
        });
          
        resultsDiv.textContent = resultText; //Add the result text to results div
        resultsDiv.appendChild(restartButton);
      }
    });
  });
}

function displayResults(str) {
  container.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
  container.textContent = str;
}

function isGameOver() { //returns true if playerCOunt or computer COunt reaches 5
    return playerCount === 5 || computerCount === 5
}

// function resetGame() {
//   playerCount = 0;
//   computerCount = 0;
//   playerScoreSpan.textContent = 0;
//   computerScoreSpan.textContent = 0;
//   resultsDiv.textContent = "Let's play again!";
// }

//! Start Screen
const startGameBtn = document.getElementById('start-game-btn');
const gameStartScreen = document.querySelector('.game-start-screen');

// // hide the game UI and show the start screen initially
// document.getElementById('score').style.display = 'none';
// document.querySelectorAll('.btn').forEach(btn => btn.style.display = 'none');
// document.getElementById('results').style.display = 'none';
// document.getElementById('endgameModal').style.display = 'none';

// // add event listener to start game button
// startGameBtn.addEventListener('click', () => {
//   // hide the start screen and show the game UI
//   gameStartScreen.style.display = 'none';
//   document.getElementById('score').style.display = 'block';
//   document.querySelectorAll('.btn').forEach(btn => btn.style.display = 'inline-block');
//   document.getElementById('results').style.display = 'block';
//   document.getElementById('endgameModal').style.display = 'block';
// });


//! Health Bars



//! Play the game
game(); 







