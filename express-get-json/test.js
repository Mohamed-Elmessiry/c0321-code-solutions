// // const fetch = require('node-fetch');

// // fetch('https://api.foursquare.com/v2/venues/search?client_id=EZOAI304JHK222F243HNN4KULBKUGKG10DPYVDWCHNJWB3HT&client_secret=IG3AUD5AEZ1TVO5PMT43BYTL2WRTIRSKWBUFQ4HZAVTZJYI3&v=20210514&near=new york&intent=browse&radius=10000&query=kfc&limit=10')
// //   .then(res => res.json())
// //   .then(json => console.log(json));

// // const { response } = require('express');
// // const https = require('https');

// // https.get('https://api.foursquare.com/v2/venues/search?client_id=EZOAI304JHK222F243HNN4KULBKUGKG10DPYVDWCHNJWB3HT', response => {
// //   let data = '';
// //   response.on('data', chunk => {
// //     data += chunk;
// //   });

// // });

// // response.on('end', () => {
// //   console.log(data);
// // })

// //   .on('error', error => {
// //     console.log(error);
// //   });

// // const express = require('express');
// // const app = express();

// // app.get('api.foursquare.com/v2/venues/search?client_id=EZOAI304JHK222F243HNN4KULBKUGKG10DPYVDWCHNJWB3HT&client_secret=IG3AUD5AEZ1TVO5PMT43BYTL2WRTIRSKWBUFQ4HZAVTZJYI3&v=20210514&near=new york&intent=browse&radius=10000&query=steak&limit=10', function (req, res) {

// //   console.log(res.json);
// // });

// // app.listen(3000, () => {
// //   // eslint-disable-next-line no-console
// //   console.log('Express server listening on port 3000');
// // });

// const express = require('express');
// const app = express();
// const fetch = require('node-fetch');

// const searchUrl = 'api.foursquare.com/v2/venues/search?client_id=EZOAI304JHK222F243HNN4KULBKUGKG10DPYVDWCHNJWB3HT&client_secret=IG3AUD5AEZ1TVO5PMT43BYTL2WRTIRSKWBUFQ4HZAVTZJYI3&v=20210514&near=new york&intent=browse&radius=10000&limit=10';

// app.get('/api/venues/:search', (req, res, next) => {

//   var searchQuery = req.params.search;

//   fetch(`searchUrl&query=${searchQuery}`)
//     .then(res => res.json()) // this is fetch res
//     .then(results => res.json(results)); // this is express res
// });

// app.listen(3000, () => {
//   // eslint-disable-next-line no-console
//   console.log('Express server listening on port 3000');
// });
