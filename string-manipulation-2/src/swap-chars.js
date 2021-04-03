/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var stringDivided = string.split('');
  var fIndex = stringDivided[firstIndex];
  var sIndex = stringDivided[secondIndex];
  stringDivided[firstIndex] = sIndex;
  stringDivided[secondIndex] = fIndex;
  for (var i = 0; i < stringDivided.length; i++) {
    newString += stringDivided[i];
  }
  return newString;
}
