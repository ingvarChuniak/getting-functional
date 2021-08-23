const { partialCurry: curry } = require("../partial-curry");
const { getByPath } = require("./getter");
const { updateObject } = require("./updateObject");

class Constant {
  constructor(value) {
    this.value = value;
    this.map = () => this;
  }
}

class Variable {
  constructor(value) {
    this.value = value;
    this.map = fn => new Variable(fn(value));
  }
}

const lens = (getter, setter) => fn => obj => fn(getter(obj)).map(value => setter(value, obj));

const lensProp = attr => lens(curry(getByPath)([attr]), curry(updateObject)([attr]));

const view = curry((lens, obj) => lens(value => new Constant(value))(obj).value);
const set = curry((lens, value, obj) => lens(() => new Variable(value))(obj).value);
const over = curry((lens, fn, obj) => lens(value => new Variable(fn(value)))(obj).value);

module.exports = {
  lens,
  lensProp,
  view,
  over,
  set,
};
