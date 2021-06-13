function uncurry(fn) {
  return function (...args) {
    const uncurried = args.reduce((f, c) => (typeof f === "function" ? f(c) : f), fn);
    return typeof uncurried === "function" ? uncurry(uncurried) : uncurried;
  };
}

module.exports = {
  uncurry,
};
