function trampoline(thunk) {
  while (typeof thunk === "object" && thunk.constructor.name === "Thunk") {
    thunk = thunk.fn();
  }
  return thunk;
}

module.exports = {
  trampoline,
};
