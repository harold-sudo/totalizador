import totalizar from "./totalizar.js";

const tasasImpuesto = {
  UT: "6.65",
  NV: "8.00",
  TX: "6.25",
  AL: "4.00",
  CA: "8.25"
};

describe("Totalizar: ", () => {
  // it("deberia devolver precio neto: ", () => {
  //   expect(totalizar(3, 2)).toEqual(6);
  // });

  // it("deberia devolver cualquier caso de precio neto: ", () => {
  //   expect(totalizar(10, 2)).toEqual(20);
  // });

  it("deberia utilizar el impuesto de un estado", () => {
    expect(totalizar(20, 3, tasasImpuesto["TX"])).toEqual(63.75);
  });

  it("deberia utilizar el impuesto de cualquier estado", () => {
    expect(totalizar(20, 3, tasasImpuesto["UT"])).toEqual(63.99);
  });
});