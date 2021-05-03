const express = require('express');

const app = express();

app.use(function (req, res) {

  res.send('res.send being called');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
