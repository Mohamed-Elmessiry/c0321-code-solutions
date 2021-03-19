/* exported isVowel */
function isVowel(char) {
  var letter = ['a', 'E', 'I', 'o', 'u'];
  for (var i = 0; i < letter.length; i++) {
    if (char === letter[i]) {
      return true;
    }

  }
  return false;
}
