// Reverses words in an array, while keeping spaces
function reverse(a) {
    if(a.length < 2) { return a;}
    var rev = "";
    var count = 0;

    for( var i = a.length - 1; i >= 0; i--){
        if(a.charAt(i) == " "){
        if(count>0){
            rev += a.substring(i+1, i+count+1) + " ";
        } else{ 
            rev += " ";
        }
        count = 0;
        } else {
        count++;
        if(i == 0){   rev += a.substring(0, count); } 
        }
    } 
    return rev;
}
//Find the first non-repeated character in a String
function firstNoRepeat(a){
    let M = new Map();
    let S = new Map();
    for(let i = 0; i<a.length; i++){
      if(!M.has(a.charAt(i))){
        M.set(a.charAt(i)); 
        S.set(a[i], i); 
      } else {
        if(S.has( a.charAt(i) )){
          S.delete( a.charAt(i) );
        }
      }
    }
    return S.keys().next().value;
}

module.exports = {reverse, firstNoRepeat}

/*
Find the first non-repeated character in a String
Reverse a String iteratively and recursively
Determine if 2 Strings are anagrams
Check if String is a palindrome
Check if a String is composed of all unique characters
Determine if a String is an int or a double
HARD: Find the shortest palindrome in a String
HARD: Print all permutations of a String
HARD: Given a single-line text String and a maximum width value, write the function 'String justify(String text, int maxWidth)' that formats the input text using full-justification, i.e., extra spaces on each line are equally distributed between the words; the first word on each line is flushed left and the last word on each line is flushed right
*/
