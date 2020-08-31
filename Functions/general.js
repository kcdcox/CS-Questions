
// Find the most frequent integer in an array
function mostFrequentNumber(a){
  let hashT = new Map();
  for(let i = 0; i < a.length; i++){
    if(hashT.has(a[i])){
      hashT.set(a[i], hashT.get(a[i]) + 1); 
    } else {
      hashT.set(a[i],1);
    }
  }
  let v = 0, k = a[0];
  for (let [key, value] of hashT) {
    if(value>v){ k = key; v = value;}
  }
  return k;
}
//Find pairs in an integer array whose sum is equal to 10
function tenPairs(a){
  let pairs = [];
  let M = new Map();
  for(let i = 0; i< a.length; i++){
    let x = 10 - a[i];
    if(M.has(x)){
      pairs.push([a[i], x]);
      if(M.get(x) == 1){
        M.delete(x);   
      } else{
        M.set(x, M.get(x) - 1);
      }
    }
    if(M.has(a[i])){
      M.set(a[i], M.get(a[i]) + 1); 
    } else {
      M.set(a[i],1);
    }
  }
  return pairs;
}
//Find the only element in an array that only occurs once.
function singleOccurance(a){
  let M = new Map();
  let S = new Map();
  for(let i = 0; i<a.length; i++){
    if(!M.has(a[i])){
      M.set(a[i], 1); 
      S.set(a[i], 1); 
    } else {
      if(S.has(a[i])){
        S.delete(a[i])
      }
    }
  }
  return S.keys().next().value;
}
//Find the common elements of 2 int arrays
function commonInts(a,b){
  let M = new Map();
  let c = [];
  for(let i=0;i<a.length;i++){
    M.set(a[i]);
  }
  for(let y=0; y<b.length;y++){
    if(M.has(b[y])){
      c.push(b[y]);
    }
  }
  return c;
}

module.exports = {mostFrequentNumber, tenPairs, singleOccurance, commonInts}

/* 
Given 2 integer arrays, determine if the 2nd array is a rotated version of the 1st array. 
  Ex. Original Array A={1,2,3,5,6,7,8} Rotated Array B={5,6,7,8,1,2,3}
Write fibbonaci iteratively and recursively (bonus: use dynamic programming)
Implement binary search of a sorted array of integers
Implement binary search in a rotated array (ex. {5,6,7,8,1,2,3})
Use dynamic programming to find the first X prime numbers
Write a function that prints out the binary form of an int
Implement parseInt
Implement squareroot function
Implement an exponent function (bonus: now try in log(n) time)
Write a multiply function that multiples 2 integers without using *
HARD: Given a function rand5() that returns a random int between 0 and 5, implement rand7()
HARD: Given a 2D array of 1s and 0s, count the number of "islands of 1s" 
  (e.g. groups of connecting 1s)
function */

