import '../scss/main.scss';

import {registerSW} from './pwa.js';
registerSW();

console.log('HELLO 🚀')

const addGlass = document.querySelector('.buttons__add--js');
const deleteGlass = document.querySelector('.buttons__delete--js');
const numberGlass = document.querySelector('.glass__number--js');

let glassCount = parseInt(numberGlass.innerHTML);

function correctPosition() {
    if(glassCount > 9) {
        numberGlass.style.left = '78px';
    }
    else {
        numberGlass.style.left = '100px';
    }
}

const key = new Date().toISOString().slice(0, 10);

if(localStorage.getItem(key) == '') {
    numberGlass.innerHTML = '0';
    glassCount = 0;
}
else {
    numberGlass.innerHTML = localStorage.getItem(key);
    glassCount = parseInt(localStorage.getItem(key))
}

correctPosition();

addGlass.addEventListener('click', () => {
    glassCount = glassCount + 1;
    numberGlass.innerHTML = glassCount;
    localStorage.setItem(key, glassCount);
    correctPosition();
})

deleteGlass.addEventListener('click', () => {
    if(glassCount > 0) {
        glassCount = glassCount - 1;
        numberGlass.innerHTML = glassCount;    
    }
    localStorage.setItem(key, glassCount);
    correctPosition();
})