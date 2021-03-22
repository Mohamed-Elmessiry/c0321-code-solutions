/* exported capitalizeWord */
function capitalizeWord(string) {
  var divide = string.split(' ');
  var empty = '';
  for (var i = 0; i < divide.length; i++) {
    empty += divide[i].chartAt(0).toUpperCase() + divide[i].slice(1);
  }
  return empty;
}
