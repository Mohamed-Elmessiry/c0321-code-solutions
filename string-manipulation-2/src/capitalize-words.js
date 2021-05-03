/* exported capitalizeWords */
function capitalizeWords(string) {
  var StringArray = [];
  var divide = string.split(' ');

  for (var i = 0; i < divide.length; i++) {
    StringArray.push(divide[i].slice(0, 1).toUpperCase() + divide[i].slice(1).toLowerCase());
  }
  var newString = StringArray.join(' ');
  return newString;
}
