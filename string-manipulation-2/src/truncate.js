/* exported truncate */
function truncate(length, string) {
  var nstring = '';
  for (var i = 0; i < length; i++) {
    if (string.length < length) {
      return string + '...';
    } else {
      nstring += string[i];
    }
  }
  return nstring + '...';
}
