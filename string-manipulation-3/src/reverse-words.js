/* exported reverseWords */
function reverseWords(string) {
  var reversedWord = '';
  var wordArray = string.split(' ');
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    for (var j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }
    reversedWord += ' ';
  }
  reversedWord = reversedWord.slice(0, reversedWord.length - 1);
  return reversedWord;
}
