const board = document.querySelector('.board');
const sizeValue = document.querySelector('.size-value');
const sizeSlider = document.querySelector('.size-slider');


function createSquares() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
        square.addEventListener('mousedown', () => {
            square.style.backgroundColor = 'blue'
        })
    }
}

sizeSlider.addEventListener('input', () => {
    sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`
})

createSquares()