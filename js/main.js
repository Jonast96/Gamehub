console.log("ASD")

const hamburgerBtn = document.querySelector(".hamburger_btn");

const hamburgerMenu = document.querySelector(".hamburger");


hamburgerBtn.addEventListener("click", hamburgerDisplay)



function hamburgerDisplay() {
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none"
    } else {
        hamburgerMenu.style.display = "block"
    }

    console.log("3")

}
