function totalizar(cantidad, precio, estado) {
  let descuento = 0;
  if (cantidad >= 1000) {
    descuento = cantidad * precio * (3/100);
  }

  if (!estado) {
    return (cantidad * precio) - descuento;
  }
  
  const subtotal = cantidad * precio;
  const impuesto = subtotal * (Number(estado) / 100);

  return (subtotal + impuesto) - descuento;
}
// function totalizar(cantidad, precio, estado) {
//   if (estado == "CA")
//   {
//     return (cantidad * precio) + (cantidad * precio) * 0.0825;
//   }
//   else if (estado == "AL")
//   {
//     return (cantidad * precio) + (cantidad * precio) * 0.04;
//   }
//   else if (estado == "NV")
//   {
//     return (cantidad * precio) + (cantidad * precio) * 0.08;
//   }
//   else if (estado == "UT")
//   {
//     return (cantidad * precio) + (cantidad * precio) * 0.0665;
//   }

//   return cantidad * precio;
// }

export default totalizar;