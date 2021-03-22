/* exported reverse */
function reverse(array) {
  var narr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    narr.push(array[i]);
  }
  return narr;
}
