const buttons = document.querySelectorAll('.btn');
const message = document.querySelector('.message');
const resultText = document.querySelector('.result-text');
const resetButton = document.querySelector('.reset-btn');

let currentPlayer = 'X';
let gameOver = false;

// Function to handle a player's move
function handleMove(button) {
    if (!button.textContent && !gameOver) {
        button.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `It's Player ${currentPlayer}'s turn`;
        checkForWin();a
    }
}

// Function to check if a player has won
function checkForWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            buttons[a].textContent &&
            buttons[a].textContent === buttons[b].textContent &&
            buttons[a].textContent === buttons[c].textContent
        ) {
            gameOver = true;
            resultText.textContent = `Player ${buttons[a].textContent} wins!`;
            resetButton.disabled = false;
            break;
        }
    }

    // Check for a draw
    if (!buttons.some(button => !button.textContent)) {
        gameOver = true;
        resultText.textContent = "It's a draw!";
        resetButton.disabled = false;
    }
}

// Function to handle the game reset
function resetGame() {
    buttons.forEach(button => {
        button.textContent = '';
        button.disabled = false;
    });

    currentPlayer = 'X';
    gameOver = false;
    message.textContent = `It's Player X's turn`;
    resultText.textContent = '';
    resetButton.disabled = true;
}

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleMove(button);
    });
});

// Add click event listener to the reset button
resetButton.addEventListener('click', () => {
    resetGame();
});