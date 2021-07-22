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

console.log(fibonacciTailCall(4));
console.log(fibonacci(4, x => x));
