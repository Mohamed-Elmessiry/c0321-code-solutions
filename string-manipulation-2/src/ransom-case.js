/* exported ransomCase */
function ransomCase(string) {
  var nstring = string[0].toLowerCase();
  for (var i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      nstring += string[i].toLowerCase();
    } else {
      nstring += string[i].toUpperCase();
    }
  }
  return nstring;
}
