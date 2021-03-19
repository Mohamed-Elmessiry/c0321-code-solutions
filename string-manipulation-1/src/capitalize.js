/* exported capitalize */
function capitalize(word) {
  var small = word.toLowerCase();
  var capitalOne = small.slice(0, 1).toUpperCase();
  var remaining = small.slice(1);
  var capital = capitalOne + remaining;
  return capital;
}
