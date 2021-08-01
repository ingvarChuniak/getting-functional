const { deepCopy } = require("./deepCopy");
const { deepFreeze } = require("./deepFreeze");
const { setByPath } = require("./setter");

function updateObject(arr, obj, value) {
  return deepFreeze(setByPath(arr, deepCopy(obj), value));
}

module.exports = {
  updateObject,
};
