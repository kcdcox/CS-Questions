const sorting = require('../Functions/sorting');

let a,b,c,d,e;

function setTestValues(){
    a = [12,2,3,23,4,5,12,3,6,87,976,34,21,12,12,12,56,43,21,1,2,3,4,9,80];
    b = [1,2,2,3,3,3,4,4,5,6,9,12,12,12,12,12,21,21,23,34,43,56,80,87,976];
    c = [0];
    d = [9,0];
    e = [0,9];
}
// ========================== BUBBLE SORT
test('Bubble Sort', () => {
    setTestValues();
    expect(sorting.bubbleSort(a)).toStrictEqual(b);
    expect(sorting.bubbleSort(c)).toStrictEqual(c);
    expect(sorting.bubbleSort(d)).toStrictEqual(e);
});
// ========================== INSERTION SORT
test('Insertion Sort', () => {
    setTestValues();
    expect(sorting.insertionSort(a)).toStrictEqual(b);
    expect(sorting.insertionSort(c)).toStrictEqual(c);
    expect(sorting.insertionSort(d)).toStrictEqual(e);
});




