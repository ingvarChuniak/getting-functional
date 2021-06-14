const { partialApplication } = require("../partial-application");

function add(a, b) {
  return a + b;
}

describe("Partial application", () => {
  it("To return a function", () => {
    expect(typeof partialApplication(add, 1, undefined)).toBe("function");
  });
  it("To return 2", () => {
    expect(partialApplication(add, 1, undefined)(1)).toBe(2);
  });
});
