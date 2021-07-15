function reduce(origin, cb, accum) {
  const reduceLoop = (arr, index, accum) => {
    return arr.length === 0 ? accum : reduceLoop(arr.slice(1), index + 1, cb(accum, arr[0], index, origin));
  };
  return reduceLoop(origin, 0, accum);
}

console.log(
  reduce(
    [1, 2, 3],
    (r, c) => {
      return r + c;
    },
    0
  )
);
