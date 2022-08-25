import { bubbleSort } from "../bubbleSort";
import { a, b, c, d, e } from "./test-utilities";

test.only("Bubble Sort", () => {
  expect(bubbleSort(a)).toStrictEqual(b);
  expect(bubbleSort(c)).toStrictEqual(c);
  expect(bubbleSort(d)).toStrictEqual(e);
});
