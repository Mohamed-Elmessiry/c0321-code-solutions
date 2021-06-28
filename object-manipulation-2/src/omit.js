/* exported omit */
function omit(source, keys) {
  var omittedObject = {};
  for (var property in source) {
    if (!keys.includes(property)) {
      omittedObject[property] = source[property];
    }
  }
  return omittedObject;
}
