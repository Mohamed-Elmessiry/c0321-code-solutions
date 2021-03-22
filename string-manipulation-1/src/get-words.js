/* exported getWords */
function getWords(string) {

  var newString = string.split(' ');

  if (string.length === 0) {
    return [];
  }

  return newString;
}
