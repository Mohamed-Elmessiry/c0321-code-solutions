/* exported takeRight */
function takeRight(array, count) {
  var newArr = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (array[i] === newArr[i]) {
      return newArr;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
