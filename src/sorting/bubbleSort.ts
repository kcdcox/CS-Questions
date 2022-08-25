export const bubbleSort = (a: number[]) => {
  let len = a.length;
  let temp: number;
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
