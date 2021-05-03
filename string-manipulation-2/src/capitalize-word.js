/* exported capitalizeWord */

function capitalizeWord(string) {

  var stringSmall = string.toLowerCase();
  if (stringSmall === 'javascript') {
    return 'JavaScript';
  } else {
    var newString = stringSmall.charAt(0).toUpperCase() + stringSmall.slice(1);
    return newString;
  }

}
