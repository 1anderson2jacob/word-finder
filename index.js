'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//req.body.
const getWord = (req, res) => {
  console.log(req.query);
  // pool.query('SELECT * FROM words WHERE word LIKE \'tw_l__\';', (err, results) => {
  pool.query(queryCreator(req.query.incompleteWord), (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
}

app.route('/')
  .get(getWord);

app.listen(process.env.PORT || 80, () => {
  console.log('Server Listening');
})

function queryCreator(incompleteWord) {
  let queryString = `SELECT * FROM words WHERE word LIKE \\'${incompleteWord}\\';`;

  return queryString;
}