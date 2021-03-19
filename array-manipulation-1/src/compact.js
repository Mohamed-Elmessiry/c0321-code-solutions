/* exported compact */
function compact(array) {
  var narr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      narr.push(array[i]);
    }
  }
  return narr;

}
