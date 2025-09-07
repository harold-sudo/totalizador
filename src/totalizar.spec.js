import totalizar from "./totalizar.js";

describe("Totalizar: ", () => {
  it("deberia devolver precio neto: ", () => {
    expect(totalizar(3, 2)).toEqual(6);
  });

  it("deberia devolver cualquier caso de precio neto: ", () => {
    expect(totalizar(10, 2)).toEqual(20);
  });
});