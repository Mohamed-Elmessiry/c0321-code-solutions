/* exported isPalindromic */
function isPalindromic(string) {
  var stringinArray = string.split(' ');
  var stringMerged = stringinArray.join('');
  for (var i = 0; i < stringMerged.length; i++) {
    if (stringMerged[i] !== stringMerged[stringMerged.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
