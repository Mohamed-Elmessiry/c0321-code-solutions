/* exported isUpperCased */
function isUpperCased(word) {
  var capital = word.toUpperCase();
  if (word === capital) {
    return true;
  } else {
    return false;
  }
}
