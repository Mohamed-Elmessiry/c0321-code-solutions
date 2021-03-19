/* exported getWords */
function getWords(string) {
  var newString = string.split(' ');
  for (var i = 0; i < newString.length; i++) {
    if (string.length === 0) {
      return [];
    }
  }
  return newString;
}
