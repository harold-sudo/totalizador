import totalizar from "./totalizar.js";

const first = document.querySelector("#items-numero");
const second = document.querySelector("#precio-numero");
const estado = document.querySelector("#estado");
const total = document.querySelector("#totalizar-form");
const mostrar = document.querySelector("#mostrar-form");
const div = document.querySelector("#resultado-div");
const mostrarDiv = document.querySelector("#mostrar-div");
const tasasImpuesto = {
  UT: "6.65",
  NV: "8.00",
  TX: "6.25",
  AL: "4.00",
  CA: "8.25"
};


total.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const firstValue = Number(first.value);
  const secondValue = Number(second.value);
  const estadoValue = estado.value;

  div.innerHTML = "<p>" + "Precio neto: " + totalizar(firstValue, secondValue, tasasImpuesto[estadoValue]) + "</p>";
});

mostrar.addEventListener("submit", (event) => {
  event.preventDefault();

  const estadoValue = estado.value
  const estadoSelect = estado.options[estado.selectedIndex].text;
  const tasa = tasasImpuesto[estadoValue];
  
  mostrarDiv.innerHTML = "<p>" + 
  "Cantidad de items: " + first.value + 
  "<br>Precio por item: " + second.value +
  "<br>Estado seleccionado: " + estadoSelect  +
  "<br>Impuesto del estado: " + tasa + "%" + 
  "</p>";
});