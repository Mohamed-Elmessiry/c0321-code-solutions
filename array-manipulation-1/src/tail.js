/* exported tail */
function tail(array) {
  var narr = [];
  for (var i = 1; i < array.length; i++) {
    narr.push(array[i]);
  }
  return narr;
}
