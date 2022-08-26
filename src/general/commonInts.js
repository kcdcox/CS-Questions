//Find the common elements of 2 int arrays
exports.commonInts = (a, b) => {
  let M = new Map();
  let c = [];
  for (let i = 0; i < a.length; i++) {
    M.set(a[i]);
  }
  for (let y = 0; y < b.length; y++) {
    if (M.has(b[y])) {
      c.push(b[y]);
    }
  }
  return c;
};
