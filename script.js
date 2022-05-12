let moves = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);


function computerPlay() {
    return Math.floor(3 * Math.random());
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection, computerSelection) { //params are indices
    //TODO, return string declaring winner
    //make hard mode toggle button where computer always wins
    //easy mode where player always wins
    if (playerSelection === computerSelection) {
        console.log("tie! both chose " + moves[playerSelection]);
        return 'tie!';
    } else if (playerSelection ===  (computerSelection + 1) % 3) {
        console.log("X player beats computer with " + moves[playerSelection] + " over " + moves[computerSelection]);
        playerScore++;
        if (playerScore >= 3) {
            resetScores();
            return "player wins round";
        }
        return 'player wins!';
    } else {
        console.log("O computer beats player with " + moves[computerSelection] + " over " + moves[playerSelection]);
        computerScore++;
        if (computerScore >= 3) {
            resetScores();
            return "computer wins round";
        }
        return 'computer wins!'
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = playRound(moves.indexOf(button.id), computerPlay());
    });
});


function game() {

    playRound(moves.indexOf(playerSelection), computerPlay());        
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

