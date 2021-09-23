class Container {
  #value;
  constructor(value) {
    this.#value = value;
  }
  static of(value) {
    return new Container(value);
  }
  map(fn) {
    return fn(this.#value);
  }
  toString() {
    return `${this.constructor.name} ${this.#value}`;
  }
  valueOf() {
    return this.#value;
  }
}

class Functor extends Container {
  static of(value) {
    return new Functor(value);
  }
  map(fn) {
    return Functor.of(fn(this.valueOf()));
  }
}

class Maybe extends Functor {
  constructor(value) {
    return value === undefined || value === null ? new Nothing() : new Just(value);
  }
  static of(value) {
    return new Maybe(value);
  }
  orElse(value) {
    return this.isNothing() ? value : this.valueOf();
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
  orElse(value) {
    return value;
  }
}

class Just extends Functor {
  isNothing() {
    return false;
  }
  map(fn) {
    return Maybe.of(fn(this.valueOf()));
  }
  orElse() {
    return this.valueOf();
  }
}

class Monad extends Functor {
  static of(value) {
    return new Monad(value);
  }
  map(fn) {
    return new Monad(fn(this.valueOf()));
  }
  unwrap() {
    return this.valueOf() instanceof Container ? this.valueOf().unwrap() : this;
  }
  chain(fn) {
    return this.map(fn).unwrap();
  }
  ap(m) {
    return m.map(this.valueOf());
  }
}

class Left extends Monad {
  isLeft() {
    return true;
  }
  map() {
    return this;
  }
  catch(fn) {
    return Either.of(null, fn(this.valueOf));
  }
}

class Rigth extends Monad {
  isLeft() {
    return false;
  }
  map(fn) {
    return new Either.of(null, fn(this.valueOf()));
  }
  catch() {
    return this;
  }
}

class Either extends Monad {
  constructor(left, right) {
    return right === undefined || right === null ? new Left(left) : new Rigth(right);
  }
  static of(left, rigth) {
    return new Either(left, rigth);
  }
}

class Try extends Either {
  constructor(fn, message) {
    try {
      return Either.of(null, fn());
    } catch (error) {
      return Either.of(message || error, null);
    }
  }
  static of(fn, message) {
    return new Try(fn, message);
  }
}