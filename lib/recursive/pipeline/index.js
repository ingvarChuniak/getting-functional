function pipeline(first, ...rest) {
  return rest.length === 0 ? first : (...args) => pipeline(...rest)(first(...args));
}

module.exports = {
  pipeline,
};
