/* exported truncate */
function truncate(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (string.length < length) {
      return string + '...';
    } else {
      newString += string[i];
    }
  }
  return newString + '...';
}
