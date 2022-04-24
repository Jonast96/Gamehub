const container = document.querySelector(".flex");

const browseContainer = document.querySelector(".browse_games")

const trendingContainer = document.querySelector(".trending_games")

const baseUrl = "https://jonast.site/GameHub/wp-json/wc/store/products?per_page=20";

const displayError = document.querySelector(".error_msg")

let saleHTML = `          <div class="h1">
<h1>Weekly sale</h1>
</div>
<div class="mobile_hidden sale_nav">
<p class="sale_p">Categories</p>
<input class="sale_search" type="search" placeholder="Search.." />
<ul class="sale_nav">
  <li class="sale_nav_li"><a class="white" href="#">Sport</a></li>
  <li class="sale_nav_li">
    <a class="white" href="#">Action</a>
  </li>
  <li class="sale_nav_li">
    <a class="white" href="#">Racing</a>
  </li>
  <li class="sale_nav_li">
    <a class="white" href="#">Simulation</a>
  </li>
  <li class="sale_nav_li">
    <a class="white" href="#">MMORGP</a>
  </li>
  <li class="sale_nav_li"><a class="white" href="#">Kids</a></li>
  <li class="sale_nav_li">
    <a class="white" href="#">Flying</a>
  </li>
</ul>
</div>`;

async function APIcall(url) {

  try {
    container.innerHTML = `<div class="lds-dual-ring"></div>`
    const response = await fetch(url);

    const json = await response.json();

    console.log(json)


    for (i = 0; i < json.length; i++) {


      //SALE SECTION--------------------------------------------------------------
      if (json[i].on_sale == true) {
        saleHTML += `
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
        container.innerHTML = saleHTML;
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
