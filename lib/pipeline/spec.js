const { pipeline } = require("../pipeline");

describe("pipeline", () => {
  let api;

  beforeEach(() => {
    api = jasmine.createSpyObj(["fn1", "fn2", "fn3", "fn4"]);
  });

  it("works with a single function", () => {
    api.fn1.and.returnValue(11);
    const pipe = pipeline(api.fn1);
    const result = pipe(60);
    expect(api.fn1).toHaveBeenCalledTimes(1);
    expect(api.fn1).toHaveBeenCalledWith(60);
    expect(result).toBe(11);
  });

  it("works with 4 functions, multiple arguments", () => {
    api.fn1.and.returnValue(111);
    api.fn2.and.returnValue(222);
    api.fn3.and.returnValue(333);
    api.fn4.and.returnValue(444);
    const pipe = pipeline(api.fn1, api.fn2, api.fn3, api.fn4);
    const result = pipe(24, 11, 63);
    expect(api.fn1).toHaveBeenCalledTimes(1);
    expect(api.fn2).toHaveBeenCalledTimes(1);
    expect(api.fn3).toHaveBeenCalledTimes(1);
    expect(api.fn4).toHaveBeenCalledTimes(1);
    expect(api.fn1).toHaveBeenCalledWith(24, 11, 63);
    expect(api.fn2).toHaveBeenCalledWith(111);
    expect(api.fn3).toHaveBeenCalledWith(222);
    expect(api.fn4).toHaveBeenCalledWith(333);
    expect(result).toBe(444);
  });
});
