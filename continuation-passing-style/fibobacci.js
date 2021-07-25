const Thunk = require("../lib/thunk");
const { trampoline } = require("../lib/trampoline");

//continuation passing style
function fibonacci(n, fn) {
  return n <= 1 ? fn(n) : fibonacci(n - 2, x => fibonacci(n - 1, j => fn(j + x)));
}

//tail call version
function fibonacciTailCall(n) {
  function fibonacci(n, a, b) {
    return n <= 1 ? b : fibonacci(n - 1, b, a + b);
  }
  return fibonacci(n, 0, 1);
}

//fibonacci thunk

function fibonacciThunk(n, fn) {
  return new Thunk(
    n <= 1
      ? () => fn(n)
      : () =>
          fibonacciThunk(n - 1, x => new Thunk(() => fibonacciThunk(n - 2, j => new Thunk(() => fn(x + j)))))
  );
}

console.log(fibonacci(4, x => x));
console.log(fibonacciTailCall(4));
console.log(trampoline(fibonacciThunk(30, x => x)));
