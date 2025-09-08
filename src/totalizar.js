function totalizar(cantidad, precio, estado) {
  let descuento = 0;
  if (cantidad >= 1000) {
    descuento = cantidad * precio * (3/100);
  }else if (cantidad >= 3000) {
    descuento = cantidad * precio * (5/100);
  }else if (cantidad >= 7000) {
    descuento = cantidad * precio * (7/100);
  }else if (cantidad >= 10000) {
    descuento = cantidad * precio * (10/100);
  }else if (cantidad >= 30000) {
    descuento = cantidad * precio * (15/100);
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