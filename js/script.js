// INPUT ELEMENTS
let firstNameInput = document.getElementById('first-name-input');
let lastNameInput = document.getElementById('last-name-input');
let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');

// ERROR ICON
let firstNameErrorIcon = document.getElementById('first-name-error-icon');
let lastNameErrorIcon = document.getElementById('last-name-error-icon');
let emailErrorIcon = document.getElementById('email-error-icon');
let passwordErrorIcon = document.getElementById('password-error-icon');

// ERROR MESSAGE
let firstNameMsg = document.getElementById('first-name-message');
let lastNameMsg = document.getElementById('last-name-message');
let emailMsg = document.getElementById('email-message');
let passwordMsg= document.getElementById('password-message');

// REGULAR EXPRESSION
const emailFormat = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

// BUTTON
let componentForm = document.getElementById('component-form');

// INPUT VALIDATION (TEXT OR PASSWORD)
const validateInputLength = (input, message, icon) =>{

    if(input.value.trim().length === 0){
        input.classList.add('error-box');
        message.classList.add('show-error');
        icon.classList.add('show-badge-icon');
    } else {
        input.classList.remove('error-box');
        message.classList.remove('show-error');
        icon.classList.remove('show-badge-icon');
    }
};

// INPUT VALIDATION (EMAIL)
const validateEmail = (input, message, icon) =>{
    let isValidEmail = input.value.trim().length > 0 && emailFormat.test(input.value);
    console.log(isValidEmail)

    if(isValidEmail){
        input.classList.remove('error-box');
        message.classList.remove('show-error');
        icon.classList.remove('show-badge-icon');
    } else {
        input.classList.add('error-box');
        message.classList.add('show-error');
        icon.classList.add('show-badge-icon');
        message.innerHTML = (input.value.trim().length > 0) ? 'Looks like this is not an email' : 'Email cannot be empty';
    }
}

// SUBMIT PROCESS
componentForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    // VALIDATE FIRST NAME
    validateInputLength(firstNameInput, firstNameMsg, firstNameErrorIcon);
     // VALIDATE LAST NAME
     validateInputLength(lastNameInput, lastNameMsg, lastNameErrorIcon);
     // VALIDATE EMAIL ADDRESS
     validateEmail(emailInput, emailMsg, emailErrorIcon);
     // VALIDATE PASSWORD
     validateInputLength(passwordInput, passwordMsg, passwordErrorIcon);
});