const demethodize = Function.prototype.bind.bind(Function.prototype.call);

//which is the same as
function demethodize2(fn) {
  return Function.prototype.call.bind(fn);
}

//demethoding by bind
function demethodize3(fn) {
  return function (thisArg, ...args) {
    return fn.bind(thisArg, ...args)();
  };
}

//or
const demethodize4 =
  fn =>
  (thisArg, ...args) =>
    fn.bind(thisArg, ...args);

//demethoding by call
function demethodize5(fn) {
  return function (thisArg, ...args) {
    return fn.call(thisArg, ...args);
  };
}

//or
const demethodize6 =
  fn =>
  (thisArgs, ...args) =>
    fn.call(thisArgs, ...args);

//demethoding by apply
function demethodize7(fn) {
  return function (thisArg, ...args) {
    return fn.apply(thisArg, args);
  };
}

//or
const demethodize8 =
  fn =>
  (thisArgs, ...args) =>
    fn.apply(thisArgs, args);

module.exports = {
  demethodize,
};
