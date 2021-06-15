const { transduce, createTransducer } = require("../transducing");

describe("transducing", () => {
  it("Creates transducer", () => {
    const arr = [1, null, 2, null, 3];

    const filterTransducer = createTransducer((result, current, nextReducer) => {
      return current !== null ? nextReducer(result, current) : result;
    });

    const mapTransducer = createTransducer((result, current, nextReducer) => {
      return nextReducer(result, current * 2);
    });

    expect(typeof filterTransducer).toBe("function");

    const result = transduce(arr, [filterTransducer, mapTransducer]);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([2, 4, 6]);
  });
});
