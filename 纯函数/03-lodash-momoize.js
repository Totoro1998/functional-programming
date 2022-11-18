// undefined === null false
// undefined == null true

function memoize(fn, resolver) {
  if (typeof fn !== "function" || (fn != null && typeof fn !== "function")) {
    throw new TypeError("Expected a function");
  }
  function memoized(...args) {
    const key = resolver ? resolver.apply(this, args) : JSON.stringify(args);
    const cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  }
  memoized.cache = new Map();
  return memoized;
}
