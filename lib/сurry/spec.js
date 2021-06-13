const { curryByBind } = require("./curry");

describe("curryByBind", () => {
  it("To be function", () => {
    expect(typeof curryByBind).toBe("function");
  });
});
