/* exported capitalizeWords */
function capitalizeWords(word) {
  var js = ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'T', 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
  var small = word.toLowerCase();
  var string = small[0].toUpperCase() + small.slice(1);
  for (var i = 0; i < word.length; i++) {
    if (word[i] === js[i]) {
      return 'JavaScript';
    }
  }
  return string;

}
