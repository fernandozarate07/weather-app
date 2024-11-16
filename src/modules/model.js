const observers = [];
function addObserver(observer) {
  observers.push(observer);
}
function notify(data) {
  observers.forEach((obs) => {
    obs(data);
  });
}
async function getData(city) {
  const key = "7GJBTC4HB5EX8LYURPUN3CZEY";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function loadPage() {
  let city = "buenos aires";
  try {
    const response = await getData(city);
    console.log(response);
  } catch (error) {
    console.error("Error al inicializar el clima predeterminado:", error);
  }
}
export { addObserver, notify, getData, loadPage };
