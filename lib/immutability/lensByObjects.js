const author = {
  user: "fkereki",
  name: {
    first: "Federico",
    middle: "",
    last: "Kereki",
  },
  books: [
    { name: "Google Web Toolkit", year: 2010 },
    { name: "Functional Programming", year: 2017 },
    { name: "Javascript Cookbook", year: 2018 },
  ],
};

const { partialCurry: curry } = require("../partial-curry");
const { getByPath } = require("./getter");
const { updateObject } = require("./updateObject");

const set = curry((lens, value, obj) => lens.setter(value, obj));
const view = curry((lens, obj) => lens.getter(obj));
const over = curry((lens, fn, obj) => lens.setter(fn(lens.getter(obj)), obj));

const lens = (getter, setter) => ({ getter, setter });

const lensProp = attr => lens(curry(getByPath)([attr]), curry(updateObject)([attr]));

const composeTwoLenses = (lens1, lens2) => ({
  getter: obj => lens2.getter(lens1.getter(obj)),
  setter: curry((value, obj) => lens1.setter(lens2.setter(value, lens1.getter(obj)), obj)),
});

const deepObject = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 6,
      g: { i: 9, j: { k: 11 } },
      h: 8,
    },
  },
};

const lC = lensProp("c");
const lE = lensProp("e");
const lG = lensProp("g");
const lJ = lensProp("j");
const lK = lensProp("k");
const lJK = composeTwoLenses(lJ, lK);
const lGJK = composeTwoLenses(lG, lJK);
const lEGJK = composeTwoLenses(lE, lGJK);
const lCEGJK1 = composeTwoLenses(lC, lEGJK);
console.log(view(lCEGJK1)(deepObject));
const lCE = composeTwoLenses(lC, lE);
const lCEG = composeTwoLenses(lCE, lG);
const lCEGJ = composeTwoLenses(lCEG, lJ);
const lCEGJK2 = composeTwoLenses(lCEGJ, lK);
console.log(view(lCEGJK2)(deepObject));
