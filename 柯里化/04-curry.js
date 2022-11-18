// 模拟实现 lodash 中的 curry 方法

function getSum(a, b, c) {
  return a + b + c;
}

const curried = curry(getSum);

console.log(curried(1, 2, 3));
console.log(curried(1)(2, 3));
console.log(curried(1, 2)(3));

function curry(func) {
  return function curriedFn(...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        const _args = args.concat(Array.from(arguments));
        return curriedFn(..._args);
      };
    }
    return func(...args);
  };
}

function foo({ x, y, z } = {}) {
  console.log(`x:${x} y:${y} z:${z}`);
}

var f1 = curryProps(foo, 3);
f1({ y: 2 })({ x: 1 })({ z: 3 });

function curryProp(func, arity = 1) {
  return function curriedFn(arg) {
    const arg_len = Object.keys(arg).length;
    if (arg_len < arity) {
      const _arg = Object.assign({}, arg, { ...arguments[0] });
      return curriedFn(_arg);
    }
    return func(arg);
  };
}

function curry_no_arguments(func, arity = func.length) {
  return (function nextCurriedFn(prevArgs) {
    return function curriedFn(arg) {
      const _args = [...prevArgs, ...arg];
      if (_args.length >= arity) {
        return func(..._arg);
      } else {
        return nextCurriedFn(_args);
      }
    };
  })([]);
}

// 反柯里化
function unCurry(func) {
  return function unCurried(...args) {
    let ret = func();
    for (let arg of args) {
      ret = ret(arg);
    }
    return ret;
  };
}
