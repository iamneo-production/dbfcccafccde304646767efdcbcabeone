let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        document.getElementsByClassName('cell')[index].style.pointerEvents = 'none';
        if (checkWin(currentPlayer)) {
            document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (!board.includes('')) {
            document.getElementById('message').textContent = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWin(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return winConditions.some(combination => combination.every(index => board[index] === player));
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('message').textContent = "Player X's Turn";
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto';
    }
}

document.getElementById('reset-button').addEventListener('click', resetGame);

