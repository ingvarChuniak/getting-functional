function curryByBind(fn) {
  return fn.length === 0 ? fn(p) : (p) => curryByBind(fn.bind(null, p));
}

function curryByBind2(fn) {
  return function (...args) {
    return args.length >= fn.length
      ? fn(...args)
      : curryByBind2(fn.bind(null, ...args));
  };
}

module.exports = {
  curryByBind,
  curryByBind2,
};
