const submitButton = document.getElementById("submit-button");
const mainContainer = document.getElementById("main-container");
const successContainer = document.getElementById("success-container");
const dismissButton = document.getElementById("dismiss-button");
const imageContainerMobile = document.getElementById("image-container-mobile");
const invalidEmail = document.getElementById("invalid-email");
const emailInput = document.getElementById("email-input");

function thanksMessage(event) {
    event.preventDefault();
    mainContainer.classList.toggle('hidden');
    successContainer.classList.toggle('hidden');
}

function validateEmail(event) {
    event.preventDefault();
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        invalidEmail.innerHTML = "Valid email required";
        return false;  
    }
    else {
        thanksMessage(event)
    }
}

submitButton.onclick = validateEmail

function returnToStart() {
    mainContainer.classList.toggle('hidden');
    successContainer.classList.toggle('hidden');
}

dismissButton.onclick = returnToStart;
