let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');

// INPUT ELEMENTS
let firstNameInput = document.getElementById('first-name-input');
let lastNameInput = document.getElementById('last-name-input');
let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('first-name-input');

// INPUT ELEMENTS
let firstNameMsg = document.getElementById('first-name-message');
let lastNameMsg = document.getElementById('last-name-message');
let emailMsg = document.getElementById('email-message');
let passwordMsg= document.getElementById('password-message');

// BUTTON
let componentForm = document.getElementById('component-form');

// SUBMIT PROCESS
componentForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(firstNameInput.value.trim().length === 0){
        firstNameMsg.classList.add('show-error');
    } else {
        firstNameMsg.classList.remove('show-error')
    }

    if(lastNameInput.value.trim().length === 0){
        lastNameMsg.classList.add('show-error');
    } else {
        lastNameMsg.classList.remove('show-error')
    }

    if(emailInput.value.trim().length === 0){
        emailMsg.classList.add('show-error');
    } else {
        emailMsg.classList.remove('show-error')
    }

    if(passwordInput.value.trim().length === 0){
        passwordMsg.classList.add('show-error');
    } else {
        passwordMsg.classList.remove('show-error')
    }
});