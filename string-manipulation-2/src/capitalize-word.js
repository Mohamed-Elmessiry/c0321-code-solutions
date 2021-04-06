/* exported capitalizeWord */

function capitalizeWord(string) {
  var divide = string.split(' ');
  var empty = '';
  for (var i = 0; i < divide.length; i++) {
    if (divide[i].toLowerCase() === 'javascript') {
      return 'JavaScript';
    } else {
      empty += divide[i][0].toUpperCase() + divide[i].slice(1).toLowerCase();
    }
  }
  return empty;
}
