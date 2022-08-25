import { reverse, firstNoRepeat } from "../functions/strings/strings";

// Reverses words in an array, while keeping spaces
test("reverses string", () => {
  expect(reverse("apples")).toBe("apples");
  expect(reverse("    ")).toBe("    ");
  expect(reverse(" ")).toBe(" ");
  expect(reverse(" what be ")).toBe(" be what ");
  expect(reverse(" what ")).toBe(" what ");
  expect(reverse(" w ")).toBe(" w ");
  expect(reverse(" a house is nice")).toBe("nice is house a ");
  expect(reverse(" a house is nice ")).toBe(" nice is house a ");
  expect(reverse(" a house   is nice ")).toBe(" nice is   house a ");
});

//Find the first non-repeated character in a String
test("first non-repeated character in a String", () => {
  expect(firstNoRepeat("apples are delicious")).toBe("r");
});
