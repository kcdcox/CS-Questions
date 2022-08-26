//Find the only element in an array that only occurs once.
exports.singleOccurance = (a) => {
  let M = new Map();
  let S = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!M.has(a[i])) {
      M.set(a[i], 1);
      S.set(a[i], 1);
    } else {
      if (S.has(a[i])) {
        S.delete(a[i]);
      }
    }
  }
  return S.keys().next().value;
};
