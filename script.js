let randomNumber;
let attempts;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guessInput').value = '';
}

document.getElementById('submitGuess').addEventListener('click', function () {
    const userGuess = document.getElementById('guessInput').value;
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    if (userGuess === '' || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;
    const guess = Number(userGuess);

    if (guess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
    } else {
        feedback.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
});

document.getElementById('restartGame').addEventListener('click', initializeGame);

// Initialize the game on page load
initializeGame();
