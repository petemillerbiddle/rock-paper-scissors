let moves = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let moveIndex = Math.floor(3 * Math.random());
    console.log("computer move is " + moves[moveIndex]);
    return moveIndex;
}

function playRound(playerSelection, computerSelection) { //params are indices
    //TODO, return string declaring winner
    if (playerSelection === computerSelection) {
        console.log("tie! both chose " + moves[playerSelection]);
        return "tie!";
    } else if (playerSelection === 0 && computerSelection === 2) {
        console.log("player beats computer with " + moves[playerSelection] + " over " + moves[computerSelection]);
        playerScore++;
        return "player wins";
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("computer beats player with " + moves[computerSelection] + " over " + moves[playerSelection]);
        computerScore++;
        return "computer wins";
    } else if (playerSelection > computerSelection) {
        console.log("player beats computer with " + moves[playerSelection] + " over " + moves[computerSelection]);
        playerScore++;
        return "player wins";
    } else {
        console.log("computer beats player with " + moves[computerSelection] + " over " + moves[playerSelection]);
        computerScore++;
        return "computer wins";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("your play? ");
        computerSelection = computerPlay();
        playRound(moves.indexOf(playerSelection), computerSelection);        
    }
    if (playerScore > computerScore) {
        console.log("player wins!");
    }
    else if (computerScore > playerScore) {
        console.log("computer wins!");
    }
    else {
        console.log("tie game!");
    }
}


game();