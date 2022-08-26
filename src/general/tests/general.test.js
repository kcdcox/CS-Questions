const { mostFrequentNumber } = require("../mostFrequentNumber");
const { singleOccurance } = require("../singleOccurance");
const { tenPairs } = require("../tenPairs");
const { fibboRecursive } = require("../fibboRecursive");
const { commonInts } = require("../commonInts");

// Find the most frequent integer in an array
test("Most frequent integer in an array", () => {
  const a = [1, 2, 3, 2, 3, 4, 3, 3, 3, 4];
  expect(mostFrequentNumber(a)).toBe(3);
});

//Find pairs in an integer array whose sum is equal to 10
test("Pairs of Sum 10", () => {
  const a = [1, 2, 3, 2, 3, 4, 3, 3, 3, 4, 9, 10, 5, 5, -10, 20, 7, 7, 8];
  const b = [
    [1, 9],
    [5, 5],
    [-10, 20],
    [7, 3],
    [8, 2],
    [7, 3],
  ];
  expect(
    tenPairs(a)
      .map((a) => a.id)
      .sort()
  ).toEqual(b.map((a) => a.id).sort());
  const c = [3, 3, 3, 7, 7, 7, 7];
  const d = [
    [3, 7],
    [3, 7],
    [3, 7],
  ];
  expect(
    tenPairs(c)
      .map((c) => c.id)
      .sort()
  ).toEqual(d.map((c) => c.id).sort());
});

//Find the only element in an array that only occurs once.
test("find the single Occurance", () => {
  const a = [1, 2, 3, 2, 3, 4, 4, 3, 3, 3, 4, 9, 10, 9, 10, 5, 5, 8, 7, 7, 8];
  const b = [1, 1];
  expect(singleOccurance(a)).toBe(1);
});

//Find the common ints in both arrays
test("find the single Occurance", () => {
  const a = [1, 2, 3, 4, 5, 10];
  const b = [0, 1, 2, 4, 10, 11, 12];
  const c = [1, 2, 4, 10];
  expect(commonInts(a, b).sort()).toEqual(c.sort());
});

//Find fibbonaccie value from number
test("Find fibbonaccie value from number", () => {
  expect(fibboRecursive(0)).toBe(0);
  expect(fibboRecursive(1)).toBe(1);
  expect(fibboRecursive(2)).toBe(1);
  expect(fibboRecursive(3)).toBe(2);
  expect(fibboRecursive(10)).toBe(55);
  expect(fibboRecursive(20)).toBe(6765);
});
