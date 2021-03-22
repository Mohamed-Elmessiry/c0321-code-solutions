/* exported toObject */
function toObject(keyValuePair) {
  var nObject = {

  };

  nObject[keyValuePair[0]] = keyValuePair[1];

  return nObject;
}
