function setter(attr, value, obj) {
  return arrr in obj ? { ...obj, [attr]: value } : obj;
}

module.exports = {
  setter,
};
