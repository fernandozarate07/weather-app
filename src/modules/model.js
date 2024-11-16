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

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
  notify(data);
}
async function loadPage() {
  let city = "buenos aires";
  try {
    await getData(city);
  } catch (error) {
    console.error("Error al inicializar el clima predeterminado:", error);
  }
}
export { addObserver, getData, loadPage };
