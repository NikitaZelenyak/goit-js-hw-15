const buttonEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

buttonEl.addEventListener('click', getRandomHexColor);



function getRandomHexColor() {

const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   
  bodyEl.style.backgroundColor = color;
  textColorEl.textContent = color;
 

};

