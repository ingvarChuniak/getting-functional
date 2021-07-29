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

class Functor extends Container {
  static of(value) {
    return new Functor(value);
  }

  map(fn) {
    return Functor.of(fn(this[VALUE]));
  }
}

class Nothing extends Functor {
  isNothing() {
    return true;
  }

  toString() {
    return "Nothing()";
  }

  map() {
    return this;
  }
}

class Just extends Functor {
  isNothing() {
    return false;
  }

  map(fn) {
    return Maybe.of(fn(this[VALUE]));
  }
}

class Maybe extends Functor {
  constructor(value) {
    return value === undefined || value === null ? new Nothing() : new Just(value);
  }

  static of(value) {
    return new Maybe(value);
  }
}

const plus1 = x => x + 1;
console.log(Maybe.of(2209).map(plus1).map(plus1).toString()); // "Just(2211)"
console.log(Maybe.of(null).map(plus1).map(plus1).toString()); // "Nothing()"
