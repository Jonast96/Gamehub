



//Show game and info by using url + id

const gameInfo = document.querySelector(".game_info")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://jonast.site/exam/wp-json/wc/store/products/" + id;

let html = ""


async function APIcall() {
  try {

    gameInfo.innerHTML = `<div class="lds-dual-ring"></div>`
    const response = await fetch(url);

    const json = await response.json();

    console.log(json.name);

    html += `

        <div class = "container_img">
        <h1>${json.name}</h1>
        <p class="info_price">${json.prices.price}</p>
      </div>
      <div class="container">
        <div class="container_img" style="background-image: url('${json.images[0].src}');">
         
        </div>
        <div class="info">
          ${json.description}
          
          <div class="btn">
          <button>Add to cart</button>
        </div>
        </div>
        <dialog class="popup">
        <h2>Item added to cart</h2>
        <p>Your item has successfully been added to the cart</p>
        <a class="complete" href="/payment.html">Complete purchase</a>
        <a class="continue" href="/Product_page.html?id=${json.id}">Continue shopping</a>
      </dialog>
        `
    gameInfo.innerHTML = html

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

  } catch (error) {
    console.error();
  }
}
APIcall()





