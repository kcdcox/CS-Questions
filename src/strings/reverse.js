// Reverses words in an array, while keeping spaces
exports.reverse = (a) => {
  if (a.length < 2) {
    return a;
  }
  var rev = "";
  var count = 0;

  for (var i = a.length - 1; i >= 0; i--) {
    if (a.charAt(i) == " ") {
      if (count > 0) {
        rev += a.substring(i + 1, i + count + 1) + " ";
      } else {
        rev += " ";
      }
      count = 0;
    } else {
      count++;
      if (i == 0) {
        rev += a.substring(0, count);
      }
    }
  }
  return rev;
};
