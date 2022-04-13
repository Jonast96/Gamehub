


/* Filters */

const filterBtn = document.querySelector(".more_filters")

const moreFilters = document.querySelector(".mobile_hidden_btn")

filterBtn.addEventListener("click", filterFunction)

function filterFunction() {

    moreFilters.style.display = "inline";
    filterBtn.style.display = "none"

}


