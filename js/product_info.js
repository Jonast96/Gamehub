/* add to cart */
const modal = document.querySelector(".popup")
const openModal = document.querySelector(".btn")

openModal.addEventListener("click", () => {
    modal.showModal()
    modal.classList.add("flex")
})

window.onclick = (event) => {
    if (event.target == modal) {
        modal.close();
        modal.classList.remove("flex")
    }
}