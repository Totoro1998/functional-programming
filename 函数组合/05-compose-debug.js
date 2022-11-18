// 函数组合 调试
// NEVER SAY DIE  --> never-say-die

const _ = require("lodash");

// const log = v => {
//   console.log(v)
//   return v
// }

const trace = _.curry((tag, v) => {
  console.log(tag, v);
  return v;
});

// _.split()
// const split = _.curry((sep, str) => _.split(str, sep));

// _.toLower()
// const join = _.curry((sep, array) => _.join(array, sep));

// const map = _.curry((fn, array) => _.map(array, fn));

const split = _.curry((sep, str) => _.split(str, sep));

const join = _.curry((sep, arr) => _.join(arr, sep));

const map = _.curry((fn, arr) => _.map(arr, fn));

// split、toLower、join

const f = _.flowRight(join("-"), map(_.toLower), split(" "));

// const f = _.flowRight(
//   join("-"),
//   trace("map 之后"),
//   map(_.toLower),
//   trace("split 之后"),
//   split(" ")
// );

console.log(f("NEVER SAY DIE"));
