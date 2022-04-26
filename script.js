const API_KEY = "5b2ed5dce8f155cc352a4fe5"; //test API KEY
let output = document.getElementById("output");
let input = document.getElementById("input");
let from = document.getElementById("currency-from");
let to = document.getElementById("currency-to");
let rate = document.getElementById("rate");

input.addEventListener("change", () => convertCurrency());
from.addEventListener("change", () => convertCurrency());
to.addEventListener("change", () => convertCurrency());

function convertCurrency() {
  fetch(
    "https://lit-earth-42250.herokuapp.com/https://v6.exchangerate-api.com/v6/" +
      API_KEY +
      "/latest/" +
      from.value
  )
    .then((response) => {
      if (response.status !== 200) {
        console.log("there was a problem. Status Code: " + response.status);
        return;
      }
      response.json().then((data) => {
        rate.innerText =
          1 +
          " " +
          from.value +
          " = " +
          data.conversion_rates[to.value] +
          " " +
          to.value;
        output.value = input.value * data.conversion_rates[to.value];
      });
    })
    .catch(function (err) {
      console.log("Fetch Error", err);
    });
}
