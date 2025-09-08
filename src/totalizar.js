function totalizar(cantidad, precio, estado) {
  const subtotal = cantidad * precio;
  const impuesto = subtotal * (Number(estado) / 100);

  return subtotal + impuesto;
}

export default totalizar;