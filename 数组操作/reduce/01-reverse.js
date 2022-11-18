const arr = [7, 6, 5, 4, 3, 2, 1];

function reverse(arr) {
  return arr.reduceRight((t, v) => {
    t.push(v);
    return t;
  }, []);
}
console.log(reverse(arr));
