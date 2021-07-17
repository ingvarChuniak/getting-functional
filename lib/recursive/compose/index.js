function compose(...fns) {
  const lastIndex = functions.length - 1;
  return fns.length === 1 ? fns[0] : (...args) => compose(fns.slice(0, lastIndex))(fns[lastIndex](...args));
}

module.exports = {
  compose,
};
