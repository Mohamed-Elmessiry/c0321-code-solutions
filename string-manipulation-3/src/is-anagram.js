/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var arrayFirst = firstString.split('');
  var arraySecond = secondString.split('');
  arrayFirst.sort();
  arraySecond.sort();
  firstString = arrayFirst.join('');
  secondString = arraySecond.join('');
  firstString = firstString.trim();
  secondString = secondString.trim();
  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
}
