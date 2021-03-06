const { expect } = require("chai");
const { average } = require("../average");

it("computes average of a list of numbers", () => {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it("reports the average as NaN on an empty list", () => {
  expect(average([])).to.be.NaN;
});

it("ignores NaN in the input", () => {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it("checks if string is present in input list and then converts it to number", () => {
  expect(average([1, "2", 3, "4"])).to.be.approximately(2.5, 0.01);
});

it("find outliers and remove them from the list", () => {
  expect(average([6, 2, 1, 5, 4, 3, 50])).to.be.approximately(3.5, 0.01);
});
