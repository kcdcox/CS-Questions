// Fibbonacci recursive function
const fibboRecursive = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n <= 1) {
    return 1;
  }
  return fibboRecursive(n - 1) + fibboRecursive(n - 2);
};

module.exports = { fibboRecursive };
