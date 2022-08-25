export const insertionSort = (a: number[]) => {
  let k: number, i: number;
  for (let j = 1; j < a.length; j++) {
    k = a[j];
    i = j - 1;
    while (i > -1 && a[i] > k) {
      a[i + 1] = a[i];
      i--;
    }
    a[i + 1] = k;
  }
  return a;
};
