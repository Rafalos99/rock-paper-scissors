
function getComputerChoice() {
    let things = ['Rock', 'Paper', 'Scissor'];
    return choice = things[Math.floor(Math.random() * things.length)];
}

function oneRound(playerSelection, computerSelection)