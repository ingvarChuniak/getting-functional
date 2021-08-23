function getter(attr, obj) {
  return attr in obj ? obj[attr] : undefined;
}

module.exports = {
  getter,
};
