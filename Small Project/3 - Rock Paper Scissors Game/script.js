function play(player) {
    const choices = ['rock', 'paper', 'scissors'];
    const computer = choices[Math.floor(Math.random() * 3)];

    document.getElementById('player').textContent = capitalize(player);
    document.getElementById('computer').textContent = capitalize(computer);

    let result = '';

    if (player === computer) {
        result = "It's a draw!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById('result').textContent = result;
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
