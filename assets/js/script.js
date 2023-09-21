/* Wait for the DOM to finish loading before running the game */
/* Get the buttons and insert event listeners for getPlayerChoice (R, P, S) buttons */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("btn-choices");
    for (let button of buttons) {
        button.addEventListener("click", getPlayerChoice);
    }
    runGame();
});

/* Variables */
const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById('player-choice-img');
const computerChoice = document.getElementById('computer-choice-img');
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
const winner = ascertainWinner();
document.getElementById('scores').textContent = playerScore;
document.getElementById('losses').textContent = computerScore;


/* The main game function - called both when the script is first loaded and after the restart alert */
function runGame() {
    getPlayerChoice();
    getComputerChoice();
    const winner = ascertainWinner(playerChoice, computerChoice);
    incrementScores(winner);
    if (playerScore === maxScore || computerScore === maxScore) {
        gameEnd();
    }
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
    const computerChoice = getComputerChoice();
    const winner = ascertainWinner(playerChoice, computerChoice);
    updateScores(winner);
}

/* Generate a random choice of R, P or S for the computer */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    const computerChoiceImg = document.getElementById('computer-choice-img');

    if (computerChoice === 'rock') {
        computerChoiceImg.src = 'assets/images/rock.webp';
    } else if (computerChoice === 'paper') {
        computerChoiceImg.src = 'assets/images/paper.webp';
    } else if (computerChoice === 'scissors') {
        computerChoiceImg.src = 'assets/images/scissors.webp';
    }
    computerChoiceImg.style.display = 'block';
}

/* Determine whether player or computer choice wins */
function ascertainWinner(playerChoice, computerChoice) {
    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}

/* Increment player wins (scores) and computer wins (losses) and display them */
function incrementScores() {
}

/* Game end/after 5 rounds add restart alert? */
function gameEnd() {
}