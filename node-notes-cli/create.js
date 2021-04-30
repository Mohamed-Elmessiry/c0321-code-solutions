const dataJson = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'create') {
  dataJson.notes[dataJson.nextId] = process.argv[3];
  dataJson.nextId++;

  const dataJsonStrignified = JSON.stringify(dataJson, null, 2);

  fs.writeFile('data.json', dataJsonStrignified, 'utf8', err => {
    if (err) throw err;
  });

}
