// Execute bubble sort on an array of numbers
exports.bubbleSort = (a) => {
  let len = a.length;
  let temp;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i <= len; i++) {
      if (a[i - 1] > a[i]) {
        temp = a[i - 1];
        a[i - 1] = a[i];
        a[i] = temp;
        swapped = true;
      }
    }
    len--;
  }
  return a;
};
