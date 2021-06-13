function range(start, stop) {
  return new Array(stop - start).fill(0).map((_, i) => start + i);
}

module.exports = {
  range,
};