/* Wait for the DOM to finish loading before running the game */
/* Insert event listeners for R, P, S buttons */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".btn-choices");
    for (const button of buttons) {
        button.addEventListener("click", getPlayerChoice);
    }
});

/* Variables */
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('.btn-choices');
let playerScore = 0;
let computerScore = 0;

/* The main game function - called both when the script is first loaded and after the restart alert */
function runGame() {
}

/* Get the player's choice of R, P or S */
function getPlayerChoice(event) {
    const playerChoice = event.target.getAttribute('data-type');
    const playerChoiceImg = document.getElementById('player-choice-img');

    if (playerChoice === 'rock') {
        playerChoiceImg.src = 'assets/images/rock.webp';
    } else if (playerChoice === 'paper') {
        playerChoiceImg.src = 'assets/images/paper.webp';
    } else if (playerChoice === 'scissors') {
        playerChoiceImg.src = 'assets/images/scissors.webp';
    }
    playerChoiceImg.style.display = 'block';
}

/* Generate a random choice of R, P or S for the computer */
function getComputerChoice() {
}

/* Determine whether player or computer choice wins */
function ascertainWinner() {
    compareChoices(playerChoice, computerChoice);
}

/* Increment player wins (scores) and computer wins (losses) and display them */
function incrementScores() {
}

/* Game end/after 5 rounds add restart alert? */
function gameEnd() {
}