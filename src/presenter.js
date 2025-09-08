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

  const cantidad = Number(first.value);
  const precio = Number(second.value);
  const estadoValue = estado.value
  const estadoSelect = estado.options[estado.selectedIndex].text;
  const tasa = tasasImpuesto[estadoValue];
  const items = [1000, 3000, 7000, 10000, 30000];
  const descuentos = [0.03, 0.05, 0.07, 0.10, 0.15];

  let descuento = 0;
  
  for (let i = 0; i < items.length; i++) {
    if (cantidad >= items[i]) {
      descuento = first.value * second.value * descuentos[i];
      break;
    }
  }
  
  mostrarDiv.innerHTML = "<p>" + 
  "Cantidad de items: " + cantidad + 
  "<br>Precio por item: " + precio +
  "<br>Estado seleccionado: " + estadoSelect  +
  "<br>Impuesto del estado: " + tasa + "%" + 
  "<br>Descuento aplicado: $" + descuento.toFixed(2) +
  "</p>";
});