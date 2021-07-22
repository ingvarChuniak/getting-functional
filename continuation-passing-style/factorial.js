//continuation passing style
function factorial(n, fn) {
  return n === 0 ? fn(1) : factorial(n - 1, x => fn(x * n));
}

//tail call version
function factorialTailCall(n) {
  function factorial(n, accum) {
    return n === 0 ? accum : factorial(n - 1, n * accum);
  }
  return factorial(n, 1);
}

console.log(factorial(3, x => x));
console.log(factorialTailCall(3));
