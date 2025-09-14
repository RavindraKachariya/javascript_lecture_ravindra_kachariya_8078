let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
        message.className = 'text-yellow-200 font-semibold';
        return;
    }

    attempts++;
    if (guess === secretNumber) {
        message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
        message.className = 'text-green-300 font-bold';
    } else if (guess < secretNumber) {
        message.textContent = '📈 Too low! Try again.';
        message.className = 'text-blue-200 font-semibold';
    } else {
        message.textContent = '📉 Too high! Try again.';
        message.className = 'text-red-200 font-semibold';
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
}