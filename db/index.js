/**
 * @file Defines a connection to the PostgreSQL database, using environment
 * variables for connection information.
 */

const { Pool, types } = require('pg');
const config = require('config');

// node-pg returns numerics as strings by default. since we don't expect to
// have large currency values, we'll parse them as floats instead.
types.setTypeParser(1700, val => parseFloat(val));

// Create a connection pool. This generates new connections for every request.
const db = new Pool({
  database: config.get('DB_NAME'),
  host: config.get('DB_HOST_NAME'),
  port: config.get('DB_PORT'),
  user: config.get('POSTGRES_USER'),
  password: config.get('POSTGRES_PASSWORD'),
  max: 5,
  min: 2,
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
});

module.exports = db;
