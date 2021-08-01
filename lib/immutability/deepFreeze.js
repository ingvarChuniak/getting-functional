function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(property => deepFreeze(obj[property]));
  }
  return obj;
}

module.exports = {
  deepFreeze,
};
