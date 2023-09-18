/* Wait for the DOM to finish loading before running the game */
/* Insert event listeners for R, P, S buttons */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
});

/* Variables */
const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('.btn-choices');
// const playerChoice ?
// const computerChoice ?
let playerScore = 0;
let computerScore = 0;

/* The main game function - called both when the script is first loaded and after the restart alert */
function runGame() {
}

/* Get the player's choice of R, P or S */
function getPlayerChoice() {
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