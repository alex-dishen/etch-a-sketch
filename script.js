const divContainer = document.querySelector('.board');

function createDives() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        divContainer.appendChild(div)
    }
    
}

createDives()