const { deepCopy } = require("./deepCopy");

function getByPath(arr, obj) {
  if (arr[0] in obj) {
    return arr.length > 1 ? getByPath(arr.slice(1), obj[arr[0]]) : deepCopy(obj[arr[0]]);
  }
  return undefined;
}

module.exports = {
  getByPath,
};
