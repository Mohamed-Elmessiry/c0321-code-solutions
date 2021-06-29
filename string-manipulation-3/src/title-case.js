/* exported titleCase */
function titleCase(title) {

  let i = 0;
  let singleWord = '';
  let fullString = '';
  var noCapsWords = [' of', ' the', ' and', ' in', ' an', ' or', ' nor', ' but', ' is', ' if', ' then', ' else', ' when',
    ' at', ' from', ' a', ' by', ' on', ' off', ' for', ' out', ' over', ' with', ' to', ' into'];

  title = title.toLowerCase();
  title += ' ';

  for (i; i < title.length; i++) {

    while (title[i] !== ' ') {

      if (i === 0 || title[i - 1] === ' ' || title[i - 1] === '-') {
        singleWord += title[i].toUpperCase();
      } else {
        singleWord += title[i];
      }
      i++;
    }

    if (singleWord === ' Javascript') {
      singleWord = ' JavaScript';
    } else if (singleWord === ' Javascript:') {
      singleWord = ' JavaScript:';
    } else if (singleWord === 'Javascript:') {
      singleWord = 'JavaScript:';
    } else if (singleWord === 'Javascript') {
      singleWord = 'JavaScript';
    }

    if (noCapsWords.includes(singleWord.toLowerCase()) && title[i - (singleWord.length + 1)] !== ':') {
      singleWord = singleWord.toLowerCase();
    }

    if (singleWord === ' Api') {
      singleWord = ' API';
    }

    fullString += singleWord;
    singleWord = ' ';

  }

  fullString = fullString.trim();
  return fullString;
}
