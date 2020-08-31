const strings = require('../Functions/strings');

// Reverses words in an array, while keeping spaces
test('reverses string', () => {
  expect(strings.reverse("apples")).toBe("apples");
  expect(strings.reverse("    ")).toBe("    ");
  expect(strings.reverse(" ")).toBe(" ");
  expect(strings.reverse(" what be ")).toBe(" be what ");
  expect(strings.reverse(" what ")).toBe(" what ");
  expect(strings.reverse(" w ")).toBe(" w ");
  expect(strings.reverse(" a house is nice")).toBe("nice is house a ");
  expect(strings.reverse(" a house is nice ")).toBe(" nice is house a ");
  expect(strings.reverse(" a house   is nice ")).toBe(" nice is   house a ");
});

//Find the first non-repeated character in a String
test('first non-repeated character in a String', () => {
    expect(strings.firstNoRepeat("apples are delicious")).toBe("r");
    
  });

