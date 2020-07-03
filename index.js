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
  console.log(req.query);
  let queryString = 'SELECT * FROM words WHERE word LIKE $1;'
  pool
    .query(queryString, [req.query.incompleteWord])
    .then(results => {
      res.status(200).json(results.rows);
    })
    .catch(err => console.error(err.stack))
}

app.route('/')
  .get(getWord);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Listening');
})
