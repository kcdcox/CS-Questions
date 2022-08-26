// Find the first non-repeated character in a String
exports.firstNoRepeat = (a) => {
  let M = new Map();
  let S = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!M.has(a.charAt(i))) {
      M.set(a.charAt(i));
      S.set(a[i], i);
    } else {
      if (S.has(a.charAt(i))) {
        S.delete(a.charAt(i));
      }
    }
  }
  return S.keys().next().value;
};
