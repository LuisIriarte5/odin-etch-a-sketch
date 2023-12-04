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
        column[j].textContent = `${i+1},${j+1}`;
        column[j].setAttribute('class','elements');
        row[i].appendChild(column[j]);
    }

    row[i].style.display = 'flex';
    container.appendChild(row[i]);
}

// const elements = document.querySelectorAll('.elements');
// elements.forEach((items) => {
//     items.addEventListener('mouseover', () => {
//         items.setAttribute('style','background-color: yellow');
//     });

//     items.addEventListener('mouseout', () => {
//         items.setAttribute('style','background-color: null');
//     });
// });