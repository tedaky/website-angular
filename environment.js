/* jslint node: true */
/* jshint esversion: 6 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  pass: process.env.DBPASS,
  db: process.env.DBNAME
};
