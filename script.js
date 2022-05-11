let moves = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return Math.floor(3 * Math.random());
}

function playRound(playerSelection, computerSelection) { //params are indices
    //TODO, return string declaring winner
    //make hard mode toggle button where computer always wins
    //easy mode where player always wins
    if (playerSelection === computerSelection) {
        console.log("tie! both chose " + moves[playerSelection]);
        return "tie!";
    } else if (playerSelection ===  (computerSelection + 1) % 3) {
        console.log("X player beats computer with " + moves[playerSelection] + " over " + moves[computerSelection]);
        playerScore++;
        return "player wins";
    } else {
        console.log("O computer beats player with " + moves[computerSelection] + " over " + moves[playerSelection]);
        computerScore++;
        return "computer wins";
    }
}

function game() {
    for (let i = 0; i < 3; i++) {
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