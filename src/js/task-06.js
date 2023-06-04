const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('input', (event) => {
        console.log(event.currentTarget.value.length);
        validationInput.classList.add("invalid");
        if (event.currentTarget.value.length === 6) {
            validationInput.classList.add("valid");
            validationInput.classList.remove("invalid");
            return;
        }
    })

