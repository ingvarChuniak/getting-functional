function flipTwo(fn) {
  return function (arg1, arg2) {
    return fn(arg2, arg1);
  };
}

module.exports = {
  flipTwo,
};
