let moves = ["rock", "paper", "scissors"];

function computerPlay() {
    let moveIndex = Math.floor(3 * Math.random());
    console.log("computer move is " + moveIndex);
    return moveIndex;
}

function playRound(playerSelection, computerSelection) { //params are indices
    //TODO, return string declaring winner
    if (playerSelection === computerSelection) {
        console.log("tie! both chose " + moves[playerSelection]);
        return "tie!";
    } else if (playerSelection === 0 && computerSelection === 2) {
        console.log("player beats computer with " + moves[playerSelection] + " over " + moves[computerSelection]);
        return "player wins";
    } else if (playerSelection === 2 && computerSelection === 0) {
        console.log("computer beats player with " + moves[computerSelection] + " over " + moves[playerSelection]);
        return "computer wins";
    } else if (playerSelection > computerSelection) {
        console.log("player beats computer with " + moves[playerSelection] + " over " + moves[computerSelection]);
        return "player wins";
    } else {
        console.log("computer beats player with " + moves[computerSelection] + " over " + moves[playerSelection]);
        return "computer wins";
    }
}


const playerSelection = "scissors";
const computerSelection = computerPlay();
playRound(moves.indexOf(playerSelection), computerSelection);