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

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let size = prompt('Insert the new size of the grid (max 100):');
    if (isNaN(parseInt(size)) || parseInt(size) < 0 || parseInt(size) >100) {
        alert('You have to insert a NUMBER between 0 and 100.');
    } else {
        gridMaker(parseInt(size));
    }
});

gridMaker(16);