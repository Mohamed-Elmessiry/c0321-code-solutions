const express = require('express');
const app = express();

const fs = require('fs');
const dataJson = require('./data.json');

let nextID = 10;

app.get('/api/notes', function (req, res) {
  let key;
  const arr = [];
  for (key in dataJson.notes) {
    arr.push(dataJson.notes[key]);
  }
  res.status(200).json(arr);

});

app.get('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  if (id < 0) {
    res.status(400).send({ error: ' id must be a positive integer ' });
  } else if (dataJson.notes[id] === undefined) {
    res.status(400).send({ error: 'couldt find the id' });
  } else {
    res.status(200).send(dataJson.notes[id]);
  }

});

app.use(express.json());

app.post('/api/notes', function (req, res) {

  if (req.body.content !== undefined) {

    req.body.id = nextID;
    dataJson.notes[nextID] = req.body;
    res.status(201).json(req.body);
    nextID++;

    const dataJsonStrignified = JSON.stringify(dataJson, null, 2);
    fs.writeFile('data.json', dataJsonStrignified, 'utf8', err => {
      if (err) {
        res.status(400).send({ error: 'An unexpected error occurred.' });
      }
    });

  } else {
    res.status(400).send({ error: 'content is required' });
  }

});

// app.delete('/api/notes/:id', function (req, res) {
//   const id = req.params.id;
//   if (id < 0) {
//     res.status(400).send({ error: 'ID should be a positive integer' });
//   } else if (dataJson.notes[req.pamas.id] === undefined) {
//     res.status(404).send({ error: 'ID is not valid' });
//   } else {
//     let key;
//     for (key in dataJson) {
//       delete dataJson.notes[key];
//       res.status(204).send();
//       const dataJsonStrignified= JSON.stringify(dataJson, null, 2)
//       fs.writeFile('data.json', dataJsonStrignified, 'utf8', err => {
//         if (err) {
//           res.status(500).send({ error: "An unexpected error occurred."  });
//         }
//       }
//     }
//   }
//   // res.status(404).send({ error: 'ID is not valid' });
// });

app.put('/api/notes', function (req, res) {
  const id = req.params.id;
  if (id < 0) {
    res.status(400).send({ error: ' id must be a positive integer ' });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
