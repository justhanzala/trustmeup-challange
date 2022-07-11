const { getCartTotalPrice } = require("../src/utils/cart");

var assert = require("assert");

describe("Cart some test", function () {
  it("should return 0.00", function () {
    assert.equal(
      getCartTotalPrice([{ price: "0.0" }, { price: "0.0" }]),
      "0.00"
    );
  });

  it("should return 1.50", function () {
    assert.equal(
      getCartTotalPrice([{ price: "0.5" }, { price: "1.0" }]),
      "1.50"
    );
  });

  it("should return 0", function () {
    assert.equal(getCartTotalPrice([]), "0");
  });
});
