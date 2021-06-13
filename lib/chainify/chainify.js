const getHandler = {
  get(target, property, receiver) {
    if (target[property] === "function") {
      return (...args) => {
        const result = target[property](...args);
        if (result !== undefined) {
          return result;
        }
        return receiver;
      };
    }
    return target[property];
  },
};

function chainify(obj) {
  return new Proxy(obj, getHandler);
}

module.exports = {
  chainify,
};
