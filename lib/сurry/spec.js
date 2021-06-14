const { curryByBind } = require("../сurry");

describe("curryByBind", () => {
  it("To be a function", () => {
    expect(typeof curryByBind).toBe("function");
  });
});
