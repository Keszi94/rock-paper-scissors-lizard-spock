/**
 * Declare constants for DOM elements
 */
const buttons = document.getElementsByClassName("control");
const rounds = document.getElementsByClassName("round");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const message = document.getElementById("message");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

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
        maxRounds = parseInt(this.getAttribute("data-choice"));
        currentRound = 0;
        resetGame();
        message.textContent = `You set the game to ${maxRounds} rounds. Make your first move!`;
    
        // Remove the colored letters classes from this text
        message.classList.remove("orangeText", "greenText", "redText");
    });
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

    let matchResult = checkWinner(choices[playerChoice], choices[computerChoice]);

    // display the hands played in a round by calling the function 
    getHandPlayed(choices[playerChoice], choices[computerChoice]);

    // Declares the winner of the game after a certain amount of rounds have been played
    currentRound++;
    if (currentRound >= maxRounds) {
        declareWinner();
    }

    updateScores(matchResult);
}

// Checks who the winner is
function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        message.textContent = "It's a tie!";
        return "tie";
    } else if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "Paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
        (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
        message.textContent = "You win this round!";
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

// Declares the winner after the chosen amount of rounds are finished
function declareWinner() {
    let playerFinalScore = parseInt(playerScore.textContent);
    let computerFinalScore = parseInt(computerScore.textContent);

    if (playerFinalScore > computerFinalScore) {
        message.textContent = "Congrats! You are the winner! Start a new game!";
        // give the text color by adding a class to it from style.css
        message.classList.add("greenText");
        // remove all other possible classes
        message.classList.remove("redText", "orangeText");
    } else if (playerFinalScore < computerFinalScore) {
        message.textContent = "Awww! You lost! Better luck in the next game!";
        message.classList.add("redText");
        message.classList.remove("orangeText", "greenText");
    } else {
        message.textContent = "It's a tie! Start a new game!";
        message.classList.add("orangeText");
        message.classList.remove("greenText", "redText");
    }
    maxRounds = 0;

}

// Resets the game after choosing a new round 
function resetGame() {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    
    // include images to reload them as well 
    playerImage.src = "assets/images/rpsls.png";
    computerImage.src = "assets/images/rpsls.png";
    
    // reset the hand played text content
    playerHand.textContent = "";
    computerHand.textContent = "";

}

// Adding textContent to display which hand was played in the round
function getHandPlayed(playerChoice, computerChoice) {

    playerHand.textContent = playerChoice;
    computerHand.textContent = computerChoice;
}

