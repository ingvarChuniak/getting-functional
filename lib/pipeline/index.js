const { pipeTwo } = require("../pipeTwo");

function pipeline(...fns) {
  return fns.reduce(
    (r, f) =>
      (...args) =>
        f(r(...args))
  );
}

//or pipeline by pipeTwo

function pipeline2(...fns) {
  return fns.reduce(pipeTwo);
}

module.exports = {
  pipeline,
};
