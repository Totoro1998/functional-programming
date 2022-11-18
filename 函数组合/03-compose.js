// 模拟 lodash 中的 flowRight

const reverse = (arr) => arr.reverse();
const first = (arr) => arr[0];
const toUpper = (s) => s.toUpperCase();

function compose(...args) {
  return function (value) {
    return args.reverse().reduce((acc, fn) => {
      return fn(acc);
    }, value);
  };
}

function compose(...funcs) {
  return function composed(result) {
    let list = [...funcs];
    while (list.length > 0) {
      result = list.pop()(result);
    }
    return result;
  };
}
