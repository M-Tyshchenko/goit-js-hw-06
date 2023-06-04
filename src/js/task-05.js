const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('span');

nameInput.addEventListener('input', (event) => {
    if (event.target.value === "") {
        nameOutput.textContent = "Anonymous";
        return;
    }
    nameOutput.textContent = event.target.value;
});
