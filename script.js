const colorBtn = document.querySelector('.color-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const sizeValue = document.querySelector('.size-value');
const sizeSlider = document.querySelector('.size-slider');

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

sizeSlider.addEventListener('input', () => {
    sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`
});