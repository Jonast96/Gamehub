const submitBtn = document.querySelector(".btn")
const test = document.querySelector(".nameError")
const test2 = document.querySelector(".emailError")
const modal = document.querySelector(".popup")

submitBtn.addEventListener("click", showModal)
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

function showModal() {
    if (checkLen(name.value) & validateEmail(email.value)) {
        modal.showModal()
    } else {
        test.style.display = "block"

    };

}


window.onclick = (event) => {
    if (event.target == modal) {
        modal.close();
        modal.classList.remove("flex")
    }
}