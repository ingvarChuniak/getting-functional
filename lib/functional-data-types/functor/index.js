const Container = require("../container");

class Functor extends Container {
  static of() {
    return new Functor(value);
  }

  map(fn) {
    return Functor.of(fn(this[VALUE]));
  }
}
