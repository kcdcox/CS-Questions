const { bubbleSort } = require("../bubbleSort");
const { insertionSort } = require("../insertionSort");
const { a, b, c, d, e } = require("./test-utilities");

test("Bubble Sort", () => {
  expect(bubbleSort(a)).toStrictEqual(b);
  expect(bubbleSort(c)).toStrictEqual(c);
  expect(bubbleSort(d)).toStrictEqual(e);
});

test("Insertion Sort", () => {
  expect(insertionSort(a)).toStrictEqual(b);
  expect(insertionSort(c)).toStrictEqual(c);
  expect(insertionSort(d)).toStrictEqual(e);
});
