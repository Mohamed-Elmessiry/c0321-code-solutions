/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (array[i] === newArray[i]) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
