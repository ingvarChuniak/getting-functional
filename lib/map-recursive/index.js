function map(origin, cb) {
  const mapLoop = (arr, i) =>
    arr.length === 0 ? [] : [cb(arr[0], i, origin)].concat(mapLoop(arr.slice(1), i + 1));
  return mapLoop(origin, 0);
}

console.log(
  map([1, 2, 3], (i, index) => {
    console.log(index);
    return i * 2;
  })
);
