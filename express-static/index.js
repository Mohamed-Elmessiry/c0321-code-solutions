
const path = require('path');
const express = require('express');
const app = express();
const joinedPath = path.join(__dirname, 'public');
const staticUse = express.static(joinedPath);
app.use(staticUse);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
