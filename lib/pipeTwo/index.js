function pipeTwo(fn1, fn2) {
  return function (...args) {
    return fn2(fn1(...args));
  };
}

module.exports = {
  pipeTwo,
};
