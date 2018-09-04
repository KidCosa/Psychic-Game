var wins = 0;

var losses = 0;

var guessesLeft = 9;

var currentGuesses = "";

var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function updateWins() {
    document.querySelector("#wins").textContent = "Wins: " + wins;
}

function updateLosses() {
    document.querySelector("#losses").textContent = "Losses: " + losses;
}

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").textContent = "Guesses Left: " + guessesLeft;
}

function updateCurrentGuesses() {
    document.querySelector("#currentGuesses").textContent = "Your Current Guesses Are: " + currentGuesses;
}

updateWins();
updateLosses();
updateGuessesLeft();
updateCurrentGuesses();

var computerGuess = chars[Math.floor(Math.random() * chars.length)];

document.onkeydown = function(event) {


    var userInput = String.fromCharCode(event.which).toLowerCase();


    if (userInput === computerGuess && guessesLeft >= 1) {
        wins++;
        updateWins();
        guessesLeft = 9;
        updateGuessesLeft();
        currentGuesses = "";
        updateCurrentGuesses();
        computerGuess = chars[Math.floor(Math.random() * chars.length)];
    }
    else if (userInput!== computerGuess && guessesLeft > 1) {
        guessesLeft--;
        updateGuessesLeft();
        currentGuesses += userInput + " ";
        updateCurrentGuesses();
    }
    else {
        losses++;
        updateLosses();
        guessesLeft = 9;
        updateGuessesLeft();
        currentGuesses = "";
        updateCurrentGuesses();
        computerGuess = chars[Math.floor(Math.random() * chars.length)];
    }
};