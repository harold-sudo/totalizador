import totalizar from "./totalizar.js";

const tasasImpuesto = {
  UT: "6.65",
  NV: "8.00",
  TX: "6.25",
  AL: "4.00",
  CA: "8.25"
};

describe("Totalizar: ", () => {
  it("deberia devolver precio neto: ", () => {
    expect(totalizar(3, 2)).toEqual(6);
  });

  it("deberia devolver cualquier caso de precio neto: ", () => {
    expect(totalizar(10, 2)).toEqual(20);
  });

  it("deberia utilizar el impuesto de California", () => {
    expect(totalizar(20, 3, tasasImpuesto["CA"])).toEqual(64.95);
  });
  
  it("deberia utilizar el impuesto de Alabama", () => {
    expect(totalizar(20, 3, tasasImpuesto["AL"])).toEqual(62.4);
  });
  
  it("deberia utilizar el impuesto de Nevada", () => {
    expect(totalizar(20, 3, tasasImpuesto["NV"])).toEqual(64.8);
  });

  it("deberia utilizar el impuesto de Utah", () => {
    expect(totalizar(20, 3, tasasImpuesto["UT"])).toEqual(63.99);
  });

  it("deberia utilizar cualquier impuesto", () => {
    expect(totalizar(20, 3, tasasImpuesto["TX"])).toEqual(63.75);
  });

  it("deberia utilizar el descuento para 1000", () => {
    expect(totalizar(1000, 5, tasasImpuesto["CA"])).toEqual(5262.5);
  });

  it("deberia utilizar el descuento para 3000", () => {
    expect(totalizar(3000, 5, tasasImpuesto["CA"])).toEqual(15787.5);
  });

  it("deberia utilizar el descuento para 7000", () => {
    expect(totalizar(7000, 5, tasasImpuesto["CA"])).toEqual(36837.5);
  });

  it("deberia utilizar el descuento para 10000", () => {
    expect(totalizar(10000, 5, tasasImpuesto["CA"])).toEqual(52625);
  });

  it("deberia utilizar el descuento para 30000", () => {
    expect(totalizar(30000, 5, tasasImpuesto["CA"])).toEqual(157875);
  });
});