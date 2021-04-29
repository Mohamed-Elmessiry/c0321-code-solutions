const fs = require('fs');
const randomNumber = Math.random();
const randomString = randomNumber.toString();

fs.writeFile('random.txt', randomString, 'utf8', err => {
  if (err) throw err;
});
