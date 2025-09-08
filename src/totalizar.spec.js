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
});