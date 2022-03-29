const name = document.querySelector("#name");
const nameError = document.querySelector(".nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

const form = document.querySelector(".contactForm");

const submit = document.querySelector(".submit-btn");

form.addEventListener("submit", validateForm);

// document.querySelector('form').addEventListener(submit, validateForm);


function checkLen(value) {
    if (value.trim().length > 0) {
        return true;
    } else {
        return false
    };
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/
    const patterMatches = regEx.test(email)
    return patterMatches
};

function validateForm(event) {
    event.preventDefault()
    if (checkLen(name.value)) {
        nameError.style.display = "none"
        name.style.borderColor = "green";

    } else {
        nameError.style.display = "block"
        name.style.borderColor = "red";


    };

    if (validateEmail(email.value)) {
        emailError.style.display = "none"
        email.style.borderColor = "green";


    } else {
        emailError.style.display = "block"
        email.style.borderColor = "red";

    };

}

