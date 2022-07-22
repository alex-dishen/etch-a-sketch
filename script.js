const colorBtn = document.querySelector('.color-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');

function colorButton(coloredButton, firstToRemove, secondToRemove) {
    coloredButton.classList.add('colored-button');
    firstToRemove.classList.remove('colored-button');
    secondToRemove.classList.remove('colored-button');
}

colorBtn.addEventListener('click', () => {
    colorButton(colorBtn, rainbowBtn, eraserBtn);
});

rainbowBtn.addEventListener('click', () => {
    colorButton(rainbowBtn, colorBtn, eraserBtn);
});

eraserBtn.addEventListener('click', () => {
    colorButton(eraserBtn, colorBtn, rainbowBtn);
});