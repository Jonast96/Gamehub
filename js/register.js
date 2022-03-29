

/* socials login */

const modal = document.querySelector(".popup")
const openModal = document.querySelector(".fa-google")

openModal.addEventListener("click", () => {
    modal.showModal()
})

window.onclick = (event) => {
    if (event.target == modal) {
        modal.close();
    }
}