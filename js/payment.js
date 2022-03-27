const name = document.querySelector("#name");
const nameError = document.querySelector(".nameError");

const mail = document.querySelector("#mail");
const emailError = document.querySelector(".emailError");

const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector(".cvc_error");

const expiration = document.querySelector("#expiration");
const expirationError = document.querySelector(".expiration_error");

const card = document.querySelector("#card");
const cardError = document.querySelector(".card_error");

const adresse = document.querySelector("#adresse");
const adresseError = document.querySelector(".adresse_error");











const cityError = document.querySelector(".city_error");

const city = document.querySelector("#city");
const btn = document.querySelector(".submit-btn")





btn.addEventListener("click", validateForm)



function checkLen(value) {
    if (value.trim().length > 0) {
        return true;
    } else {
        return false
    };
};
function checkCvc(value) {
    if (value.trim().length > 2) {
        return true;
    } else {
        return false
    };
};
function checkExpiration(value) {
    if (value.trim().length > 3) {
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

function checkCard(value) {
    if (value.trim().length > 15) {
        return true;
    } else {
        return false
    };
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
    if (checkCvc(cvc.value)) {
        cvcError.style.display = "none"
        cvc.style.borderColor = "green";

    } else {
        cvcError.style.display = "block"
        cvc.style.borderColor = "red";

    };
    if (checkExpiration(expiration.value)) {
        expirationError.style.display = "none"
        expiration.style.borderColor = "green";

    } else {
        expirationError.style.display = "block"
        expiration.style.borderColor = "red";

    };
    if (checkCard(card.value)) {
        cardError.style.display = "none"
        card.style.borderColor = "green";

    } else {
        cardError.style.display = "block"
        card.style.borderColor = "red";


    };
    if (checkLen(adresse.value)) {
        nameError.style.display = "none"
        adresse.style.borderColor = "green";

    } else {
        adresseError.style.display = "block"
        adresse.style.borderColor = "red";


    };
    if (checkLen(city.value)) {
        cityError.style.display = "none"
        city.style.borderColor = "green";

    } else {
        cityError.style.display = "block"
        city.style.borderColor = "red";


    };



}

