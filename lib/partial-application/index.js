function partialApplication(fn, ...args1) {
  function partialize(...args1) {
    return function (...args2) {
      const allArgs = args1.map(i => (i === undefined ? args2.shift() : i));
      return (allArgs.includes(undefined) || allArgs.length < fn.length ? partialize : fn)(...allArgs);
    };
  }
  return partialize(...args1);
}

module.exports = {
  partialApplication,
};
