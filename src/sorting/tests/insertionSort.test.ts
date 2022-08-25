import { insertionSort } from "../insertionSort";
import { a, b, c, d, e } from "./test-utilities";

test("Insertion Sort", () => {
  expect(insertionSort(a)).toStrictEqual(b);
  expect(insertionSort(c)).toStrictEqual(c);
  expect(insertionSort(d)).toStrictEqual(e);
});
