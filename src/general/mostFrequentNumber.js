// Find the most frequent integer in an array
exports.mostFrequentNumber = (a) => {
  let hashT = new Map();
  for (let i = 0; i < a.length; i++) {
    if (hashT.has(a[i])) {
      hashT.set(a[i], hashT.get(a[i]) + 1);
    } else {
      hashT.set(a[i], 1);
    }
  }
  let v = 0,
    k = a[0];
  for (let [key, value] of hashT) {
    if (value > v) {
      k = key;
      v = value;
    }
  }
  return k;
};
