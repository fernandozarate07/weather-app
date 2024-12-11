const observers = [];
function addObserver(observer) {
  observers.push(observer);
}
function notify(data) {
  observers.forEach((obs) => {
    obs(data);
  });
}
// loader
function showLoader() {
  document.querySelector(".loader-container").style.display = "flex";
}

function hideLoader() {
  document.querySelector(".loader-container").style.display = "none";
}
// peticion a Api

async function getData(city) {
  const key = "7GJBTC4HB5EX8LYURPUN3CZEY";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${key}`;

  showLoader();

  const response = await fetch(url);
  const data = await response.json();

  hideLoader();

  return data;
}
// load page
async function loadPage() {
  let city = "buenos aires";
  try {
    const response = await getData(city);
    console.log(response);
    notify(response);
  } catch (error) {
    console.error("Error al inicializar el clima predeterminado:", error);
  }
}
export { addObserver, notify, getData, loadPage, hideLoader };
