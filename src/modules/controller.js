import { addObserver, notify, getData, loadPage, hideLoader } from "./model";
import { renderMain } from "./vision";

// load page
loadPage();
// add obs
addObserver(renderMain);
// load new city
const formNewCity = document.querySelector(".header__search");
formNewCity.addEventListener("submit", (event) => {
  event.preventDefault();

  const inpNewCity = document.querySelector(".header__input");
  const nameNewCity = inpNewCity.value.trim();
  const errorMessage = document.querySelector(".header__error");
  const errorContainer = document.querySelector(".header__errorContainer");

  if (nameNewCity === "" || !isNaN(nameNewCity)) {
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
      })
      .catch(() => {
        errorMessage.textContent = "Error, invalid city";
        errorContainer.classList.add("visible");
        hideLoader();
      });
  }
});
