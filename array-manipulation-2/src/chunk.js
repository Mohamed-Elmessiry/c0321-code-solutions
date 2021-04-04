/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var subArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === newArray[i]) {
      return newArray;
    } else {
      subArray.push(array[i]);

    }
    newArray.push(subArray);
  }
  return newArray;
}
