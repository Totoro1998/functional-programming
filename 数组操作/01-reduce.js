const { sum } = require("lodash");

const num_arr = [1, 2, 3, 4, 5, 6];

function get_sum(arr) {
  return arr.reduce(function (
    previousValue,
    currentValue,
    currentIndex,
    array
  ) {
    return previousValue + currentValue;
  },
  0);
}

console.log(get_sum(num_arr));
