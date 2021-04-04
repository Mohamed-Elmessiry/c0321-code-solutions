/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    if (array[i] === newArray[i]) {
      return newArray;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
