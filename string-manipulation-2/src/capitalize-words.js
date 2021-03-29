/* exported capitalizeWords */
function capitalizeWords(string) {
  var k = [];
  var divide = string.split(' ');

  for (var i = 0; i < divide.length; i++) {
    k.push(divide[i].slice(0, 1).toUpperCase() + divide[i].slice(1).toLowerCase());
  }
  var newString = k.join(' ');
  return newString;
}
