const { compose } = require("../compose");

const createTransducer = fn => nextReducer => (r, c) => fn(r, c, nextReducer);

function transduce(arr, transducers, defaultReducer = (r, c) => (r.push(c), r)) {
  return arr.reduce(compose(transducers)(defaultReducer), []);
}

module.exports = {
  transduce,
  createTransducer,
};
