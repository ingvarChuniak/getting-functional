const { flipTwo } = require("../flipTwo");
const { pipeTwo } = require("../pipeTwo");

function compose(...fns) {
  return fns.reduce(flipTwo(pipeTwo));
}

module.exports = {
  compose,
};
