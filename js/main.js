/* hamborger */


const hamburgerBtn = document.querySelector(".hamburger_btn");

const hamburgerMenu = document.querySelector(".hamburger");


hamburgerBtn.addEventListener("click", hamburgerDisplay)



function hamburgerDisplay() {
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none"
    } else {
        hamburgerMenu.style.display = "block"
    }


}


/* Filters */

const filterBtn = document.querySelector(".more_filters")

const moreFilters = document.querySelector(".mobile_hidden_btn")

filterBtn.addEventListener("click", filterFunction)

function filterFunction() {

    moreFilters.style.display = "inline";
    filterBtn.style.display = "none"

}