/* Wait for the DOM to finish loading before running the game */
/* Get the buttons and insert event listeners for getPlayerChoice (R, P, S) buttons */
/* Begin the game */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByClassName("btn-choices");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            const playerChoice = this.querySelector('img').getAttribute('data-type');
            runGame(playerChoice);
        });
    }
});

/* Variables */
const choices = ["rock", "paper", "scissors"];
const maxScore = 6;
let playerScore = 0;
let computerScore = 0;
const playerChoiceImg = document.getElementById('player-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');
const scoresElement = document.getElementById('scores');
const lossesElement = document.getElementById('losses');

/* The main game function - called both when the script is first loaded and after the restart alert */
function runGame(playerChoice) {
    getPlayerChoice(playerChoice);
    const computerChoice = getComputerChoice();
    const winner = ascertainWinner(playerChoice, computerChoice);
    incrementScores(winner);
}

/* Get the player's choice of R, P or S */
function getPlayerChoice(playerChoice) {
    playerChoiceImg.src = `assets/images/${playerChoice}.webp`;
    playerChoiceImg.style.display = 'block';
    return playerChoice;
}

/* Generate a random choice of R, P or S for the computer */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    computerChoiceImg.src = `assets/images/${computerChoice}.webp`;
    computerChoiceImg.style.display = 'block';
    return computerChoice;
}

/* Determine whether player or computer choice wins */
function ascertainWinner(playerChoice, computerChoice) {
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    } else if (playerChoice === computerChoice) {
        return "tie";
    } else {
        return "computer";
    }
}

/* Increment player wins (scores) and computer wins (losses) and display them */
function incrementScores(winner, playerChoice, computerChoice) {
    if (winner === "player") playerScore++;
    else if (winner === "computer") computerScore++;

    scoresElement.textContent = playerScore;
    lossesElement.textContent = computerScore;

    if (playerScore === maxScore || computerScore === maxScore) {
        gameEnd(playerChoice, computerChoice);
    }
}

/* Game end = after 5 rounds add restart alert */
function gameEnd(_playerChoice, _computerChoice) {
    let winnerText;
    if (playerScore === maxScore) {
        winnerText = "You won! Hurrah!";
    } else {
        winnerText = "Sorry! The computer won!";
    }
    alert(winnerText);

    const playAgain = confirm("Play again?");
    if (playAgain) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('scores').textContent = playerScore;
        document.getElementById('losses').textContent = computerScore;

        const playerChoiceImg = document.getElementById('player-choice-img');
        const computerChoiceImg = document.getElementById('computer-choice-img');

        playerChoiceImg.src = 'assets/images/blank.webp';
        computerChoiceImg.src = 'assets/images/blank.webp';

        location.reload(); // I found this method of refreshing the page
                           // at https://www.w3schools.com/jsref/met_loc_reload.asp
    }
}