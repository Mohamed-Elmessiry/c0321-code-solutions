/* exported reverseWord */
function reverseWord(word) {
  var rword = '';
  for (var i = word.length - 1; i >= 0; i--) {
    rword += word[i];
  }
  return rword;
}
