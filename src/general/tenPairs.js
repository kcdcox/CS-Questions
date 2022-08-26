//Find pairs in an integer array whose sum is equal to 10
exports.tenPairs = (a) => {
  let pairs = [];
  let M = new Map();
  for (let i = 0; i < a.length; i++) {
    let x = 10 - a[i];
    if (M.has(x)) {
      pairs.push([a[i], x]);
      if (M.get(x) == 1) {
        M.delete(x);
      } else {
        M.set(x, M.get(x) - 1);
      }
    }
    if (M.has(a[i])) {
      M.set(a[i], M.get(a[i]) + 1);
    } else {
      M.set(a[i], 1);
    }
  }
  return pairs;
};
