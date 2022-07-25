let currentColor = '#333333';
let currentMode = 'color';

const board = document.querySelector('.board');
const colorPanel = document.querySelector('.color-panel');
const colorBtn = document.querySelector('.color-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const sizeValue = document.querySelector('.size-value');
const sizeSlider = document.querySelector('.size-slider');

function setupBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < (size * size); i++) {
      const square = document.createElement('div');
      square.classList.add('square')
      board.appendChild(square);
      square.addEventListener('mouseover', changeColor);
      square.addEventListener('mousedown', changeColor);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

function colorButton(coloredButton, firstToRemove, secondToRemove) {
    coloredButton.classList.add('colored-button');
    firstToRemove.classList.remove('colored-button');
    secondToRemove.classList.remove('colored-button');
}

colorPanel.addEventListener('input', () => {currentColor = `${colorPanel.value}`})

colorBtn.addEventListener('click', () => {
    colorButton(colorBtn, rainbowBtn, eraserBtn);
    currentMode = 'color'
});

rainbowBtn.addEventListener('click', () => {
    colorButton(rainbowBtn, colorBtn, eraserBtn);
    currentMode = 'rainbow'
});

eraserBtn.addEventListener('click', () => {
    colorButton(eraserBtn, colorBtn, rainbowBtn);
    currentMode = 'eraser'
});

sizeSlider.addEventListener('input', () => {
    sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`
});

sizeSlider.addEventListener('mouseup', () => {
    setupBoard(sizeSlider.value);
})

window.onload = () => {
    setupBoard(16);
    colorBtn.classList.add('colored-button');
}