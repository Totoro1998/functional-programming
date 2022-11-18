function compose(...funcs) {
  let length = funcs.length;
  let index = length;
  while (index--) {
    if (typeof funcs[index] !== "function") {
      throw new TypeError("Excepted a function");
    }
  }
  return function (...args) {
    let index = 0;
    let result = length ? funcs[index].apply(this, args) : args[0];
    while (++index < length) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
}

function composeRight(...funcs) {
  return compose(...funcs.reverse());
}
