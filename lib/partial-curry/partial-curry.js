const partialCurry =
  (fn) =>
  (...args1) =>
    args1.length >= func.length
      ? fn(...args1)
      : (...args2) => partialCurry(fn)(...args1, ...args2);

function partialCurry2(fn) {
  return function (...args1) {
    return args.length >= fn.length
      ? fn(...args1)
      : function (...args2) {
          return partialCurry2(fn)(...args1, ...args2);
        };
  };
}

const partialCurry3 = (fn) => {
  const partialize =
    (...args1) =>
    (...args2) => {
      const allArgs = [...args1, ...args2];
      return (allArgs.length >= fn.length ? fn : partialize)(...allArgs);
    };
  return partialize();
};

function partialCurry4(fn) {
  function partialize(...args1) {
    return function (...args2) {
      const allArgs = [...args1, ...args2];
      return (allArgs.length >= fn.length ? fn : partialize)(...allArgs);
    };
  }
  return partialize();
}

const partialCurry5 =
  (fn, length = fn.length) =>
  (...args1) =>
    args1.length >= length
      ? fn(...args1)
      : partialCurry5(
          (...args2) => fn(...args1, ...args2),
          length - args1.length
        );

module.exports = {
  partialCurry,
  partialCurry2,
  partialCurry3,
  partialCurry4,
  partialCurry5,
};
