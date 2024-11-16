import { addObserver, getData, loadPage } from "./model";
console.log("Webpack Template Initialized!");

loadPage();

// load new city

const formNewCity = document.querySelector(".header__search-form");
formNewCity.addEventListener("submit", (event) => {
  event.preventDefault();

  const inpNewCity = document.querySelector(".header__input");
  const nameNewCity = inpNewCity.value.trim();
  const errorMessage = document.querySelector(".header__error-form");
  const errorContainer = document.querySelector(".header__error-container");

  if (nameNewCity === "" || !isNaN(nameNewCity)) {
    console.log("esta funcando el error");
    errorMessage.textContent = "Please choose a valid option";
    errorContainer.classList.add("visible");
  } else {
    errorMessage.textContent = "";
    errorContainer.classList.remove("visible");
    inpNewCity.value = "";
    getData(nameNewCity);
  }
});
