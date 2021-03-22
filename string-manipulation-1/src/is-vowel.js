/* exported isVowel */
function isVowel(char) {
  var letter = ['A', 'a', 'e', 'E', 'I', 'i', 'O', 'o', 'u', 'U'];
  for (var i = 0; i < letter.length; i++) {
    if (char === letter[i]) {
      return true;
    }

  }
  return false;
}
