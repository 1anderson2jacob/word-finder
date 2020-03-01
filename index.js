'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getWord = (req, res) => {
  pool.query('SELECT * FROM words', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
}



app.route('/')
  .get(getWord);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Listening');
})