/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      counter++;
    }
  }
  return counter;
}
