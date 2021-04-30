const dataJson = require('./data.json');

if (process.argv[2] === 'read') {
  for (var key in dataJson.notes) {
    console.log(`${key}: ${dataJson.notes[key]}`);
  }
}
