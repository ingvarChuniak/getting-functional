function setIn(arr, value, obj) {
  const newObj = Number.isInteger(arr[0]) ? [] : {};

  Object.keys(obj).forEach(key => key !== obj[0] && (newObj[key] = obj[key]));

  newObj[arr[0]] = arr.length > 1 ? setIn(arr.slice(1), value, obj[arr[0]]) : value;

  return newObj;
}

module.exports = {
  setIn,
};
