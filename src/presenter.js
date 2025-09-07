import totalizar from "./totalizar.js";

const first = document.querySelector("#items-numero");
const second = document.querySelector("#precio-numero");
const total = document.querySelector("#totalizar-form");
const mostrar = document.querySelector("#mostrar-form");
const div = document.querySelector("#resultado-div");
const mostrarDiv = document.querySelector("#mostrar-div");

total.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstValue = Number(first.value);
  const secondValue = Number(second.value);
  div.innerHTML = "<p>" + "Precio neto: " + totalizar(firstValue, secondValue) + "</p>";
});

mostrar.addEventListener("submit", (event) => {
  event.preventDefault();
  mostrarDiv.innerHTML = "<p>" + "Cantidad de items: " + first.value + "<br>" + "Precio por item: " + second.value + "</p>";
});