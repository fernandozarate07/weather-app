import { addObserver, notify, getData, loadPage } from "./model";
import { renderMain } from "./vision";
console.log("Webpack Template Initialized!");

// load page
loadPage();
// add obs
addObserver(renderMain);
// load new city
const formNewCity = document.querySelector(".header__search-form");
formNewCity.addEventListener("submit", (event) => {
  event.preventDefault();

  const inpNewCity = document.querySelector(".header__input");
  const nameNewCity = inpNewCity.value.trim();
  const errorMessage = document.querySelector(".header__error-form");
  const errorContainer = document.querySelector(".header__error-container");

  if (nameNewCity === "" || !isNaN(nameNewCity)) {
    console.error("invalid option");
    errorMessage.textContent = "Please choose a valid option";
    errorContainer.classList.add("visible");
  } else {
    errorMessage.textContent = "";
    errorContainer.classList.remove("visible");
    inpNewCity.value = "";

    // Llamamos a getData con la ciudad
    getData(nameNewCity)
      .then((response) => {
        notify(response);
        console.log(response);
      })
      .catch(() => {
        errorMessage.textContent = "Error, invalid city";
        errorContainer.classList.add("visible");
        console.error("Ciudad no disponible");
      });
  }
});
