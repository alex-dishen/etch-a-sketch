const board = document.querySelector('.board');


function createSquares() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue'
        })
    }
}

createSquares()