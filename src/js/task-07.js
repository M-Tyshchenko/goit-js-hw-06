const fontSizeController = document.querySelector('#font-size-control');
const textMagic = document.querySelector('#text');

fontSizeController.addEventListener('input', (event) => {
    textMagic.style.fontSize = `${event.currentTarget.value}px`;
})