// Preloader


document.addEventListener("DOMContentLoaded", () => {
  var preloader = document.querySelector(".loader");
  var content = document.querySelector(".FullContent");
  preloader.style.display = "none";
  content.style.display = "block";
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade", 
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Api

let Api = "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian";

async function f1() {
  const response = await fetch(Api);
  const data = await response.json();
  const meals = data.meals;

  meals.forEach((meal) => {
    const container = document.querySelector(".cardBox");
    const div = document.createElement("div");
    div.classList.add("card");
    const img = document.createElement("img");
    img.src = meal.strMealThumb;
    img.alt = meal.strMeal;
    div.appendChild(img);
    const h4 = document.createElement("h4");
    h4.innerText = meal.strMeal;
    div.appendChild(h4);
    container.appendChild(div);
  });
}
f1();
let categoriesApi = "https://www.themealdb.com/api/json/v1/1/categories.php";
async function f2() {
  const res = await fetch(categoriesApi);
  const result = await res.json();

  document.getElementById("cat-1").src = result.categories[1].strCategoryThumb;
  document.getElementById("cat-heading-1").innerText =
    result.categories[1].strCategory;
  document.getElementById("cat-2").src = result.categories[2].strCategoryThumb;
  document.getElementById("cat-heading-2").innerText =
    result.categories[2].strCategory;
  document.getElementById("cat-3").src = result.categories[3].strCategoryThumb;
  document.getElementById("cat-heading-3").innerText =
    result.categories[3].strCategory;
  document.getElementById("cat-4").src = result.categories[4].strCategoryThumb;
  document.getElementById("cat-heading-4").innerText =
    result.categories[4].strCategory;
  document.getElementById("cat-5").src = result.categories[5].strCategoryThumb;
  document.getElementById("cat-heading-5").innerText =
    result.categories[5].strCategory;
  document.getElementById("cat-6").src = result.categories[7].strCategoryThumb;
  document.getElementById("cat-heading-6").innerText =
    result.categories[7].strCategory;
}
f2();

var btn1 = document.getElementById("seacrhbtn");

async function f3() {
  var input = document.getElementById("input").value;
  var searchApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  const result = await fetch(searchApi);
  const data = await result.json();
  const meals = data.meals
console.log(data)
  var div = document.getElementById("searchResultConatiner"); // Corrected the class name
  div.style.display = "block";
  var searchh1 = document.getElementById("searchh1");
  searchh1.style.display="block"
  var CarBox = document.querySelector(".CarBox");
  CarBox.style.display = "none"
  var container = document.querySelector(".container-1");
  container.style.display = "none";
  var Heading = document.querySelector(".Heading-2");
  Heading.style.display = "none"
  meals.forEach((meal) => {
    console.log(meal);
    const container = document.querySelector("#result");
    const div = document.createElement("div");
    div.classList.add("card");
    const img = document.createElement("img");
    img.src = meal.strMealThumb;
    img.alt = meal.strMeal;
    div.appendChild(img);
    const h4 = document.createElement("h4");
    h4.innerText = meal.strMeal;
    div.appendChild(h4);
    container.appendChild(div);
    console.log(container)
  });
  
}

document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    f3();
  }
});


let clsbtn = document.getElementById("clsbtn").addEventListener("click", function () {
  
var div = document.getElementById("searchResultConatiner");
  div.style.display = "none";
   var CarBox = document.querySelector(".CarBox");
   CarBox.style.display = "block";
 
 var container = document.querySelector(".container-1");
 container.style.display = "block";
 var Heading = document.querySelector(".Heading-2");
 Heading.style.display = "block";

 var recipiContainer = document.querySelector(".recipiContainer");
 recipiContainer.style.display = "block";
 var collectionContainer = document.querySelector(".collection");
  collectionContainer.style.display = "block";
  var input = document.getElementById("input").value;
});


let clsnav = document.getElementById("clsnav").addEventListener("click", function () {
  
  let nav = document.querySelector(".mainnavbar")
    nav.style.right="-400px";
console.log("hi")

})
let menu = document.getElementById("menu").addEventListener("click", function () {
  
 
  let nav = document.querySelector(".mainnavbar");
  nav.style.right = "0px";

})