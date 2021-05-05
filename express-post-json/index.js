const express = require('express');
const app = express();

let nextId = 1;

const grades = {

};

app.get('/api/grades', function (req, res) {
  let key;
  var array = [];
  for (key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express.json());

app.post('/api/grades', (req, res) => {

  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).json(req.body);

});
