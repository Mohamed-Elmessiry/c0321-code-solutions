/* exported take */
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    if (array[i] === newArr[i]) {
      return newArr;
    } else {
      newArr.push(array[i]);
    }

  }
  return newArr;
}
