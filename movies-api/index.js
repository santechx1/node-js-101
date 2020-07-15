const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

// body parser
app.use(express.json());

moviesApi(app);
app.listen(config.port, function () {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});

/** LEARNING */
// app.get('/', function (req, res) {
//   res.send('hello world');
// });

// app.get('/json', function (req, res) {
//   res.json({ hello: 'world' });
// });

// app.get('/:year', function (req, res) {

//     // Validations reference: https://www.timeanddate.com/date/leapyear.html
//   const year = req.params.year;
//   let text = 'Año no bisiesto';
//   //   if (year % 4 !== 0) {
//   //     text = 'Año no bisiesto';
//   //   } else if (year % 100 !== 0) {
//   //     text = 'Año bisiesto';
//   //   } else if (year % 400 !== 0) {
//   //     text = 'Año no bisiesto';
//   //   } else {
//   //     text = 'Año bisiesto';
//   //   }
//   if (
//     year % 4 === 0 &&
//     (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0))
//   ) {
//     text = 'Año bisiesto';
//   }
//   // Date object is zero-indexed
//   // new Date(year, 1, 29).getMonth() == 1
//   res.send(text);
// });
