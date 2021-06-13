const { curryByBind } = require("./curry");

describe("curryByBind", () => {
  it("To be a function", () => {
    expect(typeof curryByBind).toBe("function");
  });
});
