/* exported pick */
function pick(source, keys) {
  var pickedObject = {};
  for (var property in source) {
    if (keys.includes(property) && source[property] !== undefined) {
      pickedObject[property] = source[property];
    }
  }
  return pickedObject;

}
