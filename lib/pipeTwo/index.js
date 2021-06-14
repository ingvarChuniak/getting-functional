function pipeTwo(fn1, fn2) {
  return function (...args) {
    return fn2(fn1(...args));
  };
}

//could be rewritten with arrow functions
const pipeTwo2 =
  (f1, f2) =>
  (...args) =>
    f2(f1(...args));

module.exports = {
  pipeTwo,
};
