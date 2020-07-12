import '../scss/main.scss';

import {registerSW} from './pwa.js';
registerSW();

console.log('HELLO 🚀')

const addGlass = document.querySelector('.buttons__add--js');
const deleteGlass = document.querySelector('.buttons__delete--js');
const numberGlass = document.querySelector('.glass__number--js');
const water = document.querySelector('.glass__water--js');

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

if(localStorage.getItem(key) == null) {
    numberGlass.innerHTML = "0";
    glassCount = 0;
}
else {
    numberGlass.innerHTML = localStorage.getItem(key);
    glassCount = parseInt(localStorage.getItem(key))
}

correctPosition();

const audio = new Audio('drink-sound.mp3');

addGlass.addEventListener('click', () => {
    audio.load();
    audio.play();
    glassCount = glassCount + 1;
    numberGlass.innerHTML = glassCount;
    localStorage.setItem(key, glassCount);
    correctPosition();
    water.classList.add('glass__water--animation');
})

addGlass.addEventListener('mousedown', () => {
    if(water.classList.contains('glass__water--animation')) {
        water.classList.remove('glass__water--animation');
    } 
})


deleteGlass.addEventListener('click', () => {
    if(glassCount > 0) {
        glassCount = glassCount - 1;
        numberGlass.innerHTML = glassCount;    
    }
    localStorage.setItem(key, glassCount);
    correctPosition();
})