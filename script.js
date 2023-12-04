const container = document.querySelector('#container');
const row = [];
const column = [];
for (let i = 0; i < 16; i++) {

    row[i] = document.createElement('div');
    
    for (let j = 0; j < 16; j++) {

        column[j] = document.createElement('div');

        column[j].style.border = '1px solid yellow';
        column[j].style.width = '50px';
        column[j].style.height = '50px';
        column[j].textContent = `${i},${j}`;
        row[i].appendChild(column[j]);
    }

    row[i].style.display = 'flex';
    container.appendChild(row[i]);
}