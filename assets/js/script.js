/* Wait for the DOM to finish loading before running the game */
/* Get the buttons and insert event listeners for getPlayerChoice (R, P, S) buttons */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("btn-choices");
    for (let button of buttons) {
        button.addEventListener("click", function (event) {
            getPlayerChoice(event);
        });
    }
    runGame();
});

/* Variables */
const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let winner;
const maxScore = 5;
document.getElementById('scores').textContent = playerScore;
document.getElementById('losses').textContent = computerScore;


/* The main game function - called both when the script is first loaded and after the restart alert */
function runGame() {
    winner = ascertainWinner();
    incrementScores(winner);
    if (playerScore === maxScore || computerScore === maxScore) {
        gameEnd();
    }
}

/* Get the player's choice of R, P or S */
function getPlayerChoice(event) {
    let playerChoiceTarget = event.target;
    let playerChoice = playerChoiceTarget.getAttribute('data-type');
    let playerChoiceImg = document.getElementById('player-choice-img');

    if (playerChoice === 'rock') {
        playerChoiceImg.src = 'assets/images/rock.webp';
    } else if (playerChoice === 'paper') {
        playerChoiceImg.src = 'assets/images/paper.webp';
    } else if (playerChoice === 'scissors') {
        playerChoiceImg.src = 'assets/images/scissors.webp';
    }
    playerChoiceImg.style.display = 'block';
    getComputerChoice();
    let winner = ascertainWinner();
    if (winner != false) {
        incrementScores(winner);
    }
}

/* Generate a random choice of R, P or S for the computer */
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    let computerChoiceImg = document.getElementById('computer-choice-img');

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
function ascertainWinner() {
    if (playerChoice === computerChoice) { return false; }
    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}

/* Increment player wins (scores) and computer wins (losses) and display them */
function incrementScores(winner) {
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
    document.getElementById('scores').textContent = playerScore;
    document.getElementById('losses').textContent = computerScore;
    if (isWinnerDefined() === true) {
        gameEnd();
    }
}
function isWinnerDefined() {
    if (playerScore === maxScore || computerScore === maxScore) return true;
    return false;
}

/* Game end = after 5 rounds add restart alert */
function gameEnd() {
    let winnerText;
    if (playerScore === maxScore) {
        winnerText = "You won! Hurrah!";
    } else {
        winnerText = "Sorry! The computer won!";
    }

    alert(winnerText);

    let playAgain = confirm("Play again?");
    if (playAgain) {
        cleanUp();
    }

    function cleanUp() {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('scores').textContent = playerScore;
        document.getElementById('losses').textContent = computerScore;
        computerChoice.src = 'assets/images/blank.webp';
        playerChoice.src = 'assets/images/blank.webp';
    }
}