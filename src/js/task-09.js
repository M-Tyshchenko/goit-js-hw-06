function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorHandler() {
  const randomColor = getRandomHexColor()
  bodyEl.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}

const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bodyEl = document.querySelector('body');

changeColorBtn.addEventListener('click', changeColorHandler);