const general = require('../Functions/general');

// Find the most frequent integer in an array
test('Most frequent integer in an array', () => {
  const a = [1,2,3,2,3,4,3,3,3,4,]
  expect(general.mostFrequentNumber(a)).toBe(3);

});
//Find pairs in an integer array whose sum is equal to 10
test('Pairs of Sum 10', () => {
  const a = [1,2,3,2,3,4,3,3,3,4,9,10,5,5,-10,20,7, 7, 8];
  const b = [[1,9], [5,5], [-10,20], [7,3], [8,2], [7,3]];
  expect(general.tenPairs(a).map(a => a.id).sort()).toEqual(b.map(a => a.id).sort());
  const c = [3,3,3,7,7,7,7];
  const d = [[3,7], [3,7], [3,7]];
  expect(general.tenPairs(c).map(c => c.id).sort()).toEqual(d.map(c => c.id).sort());
});
//Find the only element in an array that only occurs once.
test('find the single Occurance', () => {
  const a = [1,2,3,2,3,4,4,3,3,3,4,9,10,9,10,5,5,8,7,7,8];
  const b = [1, 1];
  expect(general.singleOccurance(a)).toBe(1);
});


