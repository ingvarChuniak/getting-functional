function deepCopy(obj) {
  if (obj && typeof obj === "object") {
    const aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(property => (aux[property] = deepCopy(obj[property])));
  }
  return aux;
}

module.exports = {
  deepCopy,
};
