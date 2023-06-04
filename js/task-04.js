let counterValue = 0;
const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

btnDecr.addEventListener("click", decrBtnClickHandler)
btnIncr.addEventListener("click", incrBtnClickHandler)

function decrBtnClickHandler() {
    counterValue -= 1;
    value.textContent = counterValue; 
}

function incrBtnClickHandler() {
    counterValue += 1;
    value.textContent = counterValue;
}