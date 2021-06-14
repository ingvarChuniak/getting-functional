const { partialCurry: curry } = require("../partial-curry");

function tap(fn) {
  return function (arg) {
    fn(arg);
    return arg;
  };
}

//or
const tap2 = curry((fn, x) => (fn(x), x)); //comma operator returns the last value to the right side;

//or just to be there
const tap3 = curry(tap);

module.exports = {
  tap: tap2,
};
