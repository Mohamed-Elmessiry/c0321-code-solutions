/* exported includes */
function includes(array, value) {
  var newArray = [];
  newArray.push(value);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
