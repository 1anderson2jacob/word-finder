'use strict';

require('dotenv').config();
// const { Pool } = require('pg');

// const isProduction = process.env.NODE_ENV === 'production';
// const connectionString =
//   `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const pool = new Pool({
//   connectionString: isProduction ? process.env.HEROKU_POSTGRESQL_BLACK_URL : connectionString, ssl: isProduction,
// });

// module.exports = { pool };

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = { client };