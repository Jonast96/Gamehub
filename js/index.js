const container = document.querySelector(".flex");

const browseContainer = document.querySelector(".browse_games")

const trendingContainer = document.querySelector(".trending_games")

const baseUrl = "https://jonast.site/GameHub/wp-json/wc/store/products?per_page=20";

const displayError = document.querySelector(".error_msg")

async function APIcall(url) {

  try {
    const response = await fetch(url);

    const json = await response.json();

    console.log(json)


    for (i = 0; i < json.length; i++) {


      //SALE SECTION--------------------------------------------------------------
      if (json[i].on_sale == true) {
        container.innerHTML += `
        <div class="weekly_sale_item sale1">
        <a href="Product_page.html?id=${json[i].id}">
            <div class = "img_container_sale">
            <img
            class="sale_img sale_background"
            src="${json[i].images[0].src}"
            alt=""Image of ${json[i].images[0].src} game cover""
          />
          </div>
          <p class="sale_text large_text">${json[i].name}</p>
          <p class="sale_text small_text">
            <i class="old_price price">${json[i].prices.regular_price}kr </i>
            <i class="new_price price">New price  ${json[i].prices.price}kr</i>
          </p>
        </a>
      </div>
        `
      }


      //TRENDING SECTION--------------------------------------------------------------

      if (json[i].prices.price == 599) {


        trendingContainer.innerHTML += `
      
        <a href="Product_page.html?id=${json[i].id}">      <div class = "background_img"  style="background-image: url('${json[i].images[0].src}');" >
        </div>
        <p class="sale_text black">${json[i].name}</p>
        <p class="sale_text price black">${json[i].prices.price}kr</p>
        </a>
  `
      }



      //BROWSE SECTION ----------------------------------------------------------------------

      browseContainer.innerHTML += `
        <div class= "browse_border">
        <a class = "mobile_span3" href="/Product_page.html?id=${json[i].id}">
        <div class = "browse_background_img "  style="background-image: url('${json[i].images[0].src}');" >
        </div>
        <div class = "game_info">
        <p class="category">${json[i].tags[0].name}<p/>
        <div>
          <i class="fa-brands fa-xbox"></i>
          <i class="fa-brands fa-playstation"></i>
          <i class="fa-brands fa-steam"></i>
        </div>
        
        </div>
  
        <div class ="game_name_price">
        <p class="sale_text ">${json[i].name}</p>
        <p class="sale_text price">${json[i].prices.price}kr</p>
        </div>
        </a>
        </div>
      `



    }
  } catch (error) {
    displayError.classList.add("error_test")
    displayError.innerHTML = `
    <p class = "error_p">ops very big error</p>
    `
  }









}

APIcall(baseUrl)


/* Filters */

const filterBtn = document.querySelector(".more_filters")

const moreFilters = document.querySelector(".mobile_hidden_btn")

filterBtn.addEventListener("click", filterFunction)

function filterFunction() {

  moreFilters.style.display = "inline";
  filterBtn.style.display = "none"

}


/* Scroll to top */

const button = document.querySelector(".scroll_button")

button.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
})

