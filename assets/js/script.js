/**
 * Declare constants for DOM elements
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const message = document.getElementById("message");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const rounds = document.getElementsByClassName("rounds");

let maxRounds = 0;
let currentRound = 0;

/**
 * Event listeners
 */

// Event listener for the game buttons - this runs the game
for (let button of buttons) {
    button.addEventListener("click", function () {
        if (maxRounds > 0 && currentRound < maxRounds) {
            let playerChoice = this.getAttribute("data-choice");
            runGame(playerChoice);
        }
    });
}

// Event listener for the buttons on how many rounds the player wants to play
for (let round of rounds) {
    round.addEventListener("click", function () {
        let roundChoice = this.getAttribute("data-choice");
        matchCount(roundChoice);
    })
}

/**
 * All functions
 */

// The main game function - checks the data when using the playerChoice button
function runGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let matchResult = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(matchResult);
}

// Checks who the winner is
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        message.textContent = "It's a tie!";
        return "tie"
    } else if (
        (playerChoice === "Rock" && (computerChoice === "Scissors" || "Lizard")) ||
        (playerChoice === "Paper" && (computerChoice === "Rock" || computerChoice === "Spock")) ||
        (playerChoice === "Scissors" && (computerChoice === "Paper" || computerChoice === "Lizard")) ||
        (playerChoice === "Lizard" && (computerChoice === "Paper" || computerChoice === "Spock")) ||
        (playerChoice === "Spock" && (computerChoice === "Rock" || computerChoice === "Scissors"))
    ) {
        message.textContent = "You win this round!"
        return "player";
    } else {
        message.textContent = "The computer wins this round!";
        return "computer";
    }
}

// Display the scores 
function updateScores(matchResult) {

    if (matchResult === "player") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (matchResult === "computer") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
}

function matchCount(

)