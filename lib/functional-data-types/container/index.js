const VALUE = Symbol("Value");

class Container {
  constructor(value) {
    this[VALUE] = value;
  }

  map(fn) {
    return fn(this[VALUE]);
  }

  static of(value) {
    return new Container(value);
  }

  toString() {
    return `${this.constructor.name}(${this[VALUE]})`;
  }

  valueOf() {
    return this[VALUE];
  }
}

module.exports = Container;
