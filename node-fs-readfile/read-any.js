// console.log(process.argv);

const fs = require('fs');
const fileChoosen = process.argv[2];

fs.readFile(fileChoosen, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
