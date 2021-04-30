const dataJson = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'update') {
  dataJson.notes[process.argv[3]] = process.argv[4];

  const dataJsonStrignified = JSON.stringify(dataJson, null, 2);

  fs.writeFile('data.json', dataJsonStrignified, 'utf8', err => {
    if (err) throw err;
  });

}
