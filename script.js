function gridMaker (num) {
    const container = document.querySelector('#container');
    const row = [];
    const column = [];

    cleanParent(container);

    for (let i = 0; i < num; i++) {

        row[i] = document.createElement('div');
    
        for (let j = 0; j < num; j++) {

            column[j] = document.createElement('div');
            column[j].style.width = `${960/num}px`;
            column[j].style.height = `${960/num}px`;
            column[j].setAttribute('class','elements');
            row[i].appendChild(column[j]);
        }

        row[i].style.cssText = 'display: flex; justify-self: stretch; align-items: stretch';
        container.appendChild(row[i]);
    }
    
    container.style.cssText = 'display: flex; flex-direction: column; justify-content: space-between; align-items: stretch;';
}

function cleanParent(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomize(limit) {
    return Math.floor(Math.random()*(limit+1));
}

function buttonHighlighter (btn) {
    switch (btn) {
        case 'hover button':
            btnChoice[0].style.background = 'rgb(200,200,200)';
            btnChoice[1].style.background = null;
            btnChoice[2].style.background = null;
            break;
        case 'rainbow button':
            btnChoice[0].style.background = null;
            btnChoice[1].style.background = 'rgb(200,200,200)';
            btnChoice[2].style.background = null;
            break;
        case 'darkening button':
            btnChoice[0].style.background = null;
            btnChoice[1].style.background = null;
            btnChoice[2].style.background = 'rgb(200,200,200)';
            break;
    }
}

function maker(size, effect) {
    gridMaker(size);
    buttonHighlighter(effect);

    const elements = document.querySelectorAll('.elements');

    elements.forEach((content) => {
        content.addEventListener('mouseover', () => {
            switch (effect) {
                case 'hover button':
                    content.style.background = 'grey';
                    break;
                case 'rainbow button':
                    content.style.background = `rgb(${randomize(255)},${randomize(255)},${randomize(255)})`;
                    break;
                case 'darkening button':
                    content.style.background = 'yellow';
                    break;
            }
        });
        content.addEventListener('mouseout', () => {
            switch (effect) {
                case 'hover button':
                    content.style.background = null;
                    break;
                case 'rainbow button':
                    content.style.background = null;
                    break;
                case 'darkening button':
                    content.style.background = 'green';
                    break;
            }
        });
    });
}

const btnGrid = document.querySelector('#gridButton');
const btnChoice = document.querySelectorAll('.button');
const btnClear = document.querySelector('#clearButton');

let hov = 1, rnb, drk;//this variables controls 

btnGrid.addEventListener('click', () => {
    let newSize = prompt('Insert the new size of the grid (max 100):');
    if (isNaN(parseInt(newSize)) || parseInt(newSize) < 0 || parseInt(newSize) >100) {
        alert('You have to insert a NUMBER between 0 and 100.');
    } else {
        size = parseInt(newSize);
        maker(size, effect);
    }
});

btnChoice.forEach((option) => {
    option.addEventListener('click', (event) => {
        console.log(event.srcElement.getAttribute('class'));
        effect = event.srcElement.getAttribute('class');
        maker(size, effect);
    });
});

let size = 16;
let effect = 'hover button';

maker(size, effect);