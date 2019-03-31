/* jslint node: true */
/* jshint esversion: 6 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  db: process.env.DBNAME,
  host: process.env.DBHOST,
  pass: process.env.DBPASS,
  port: process.env.PORT || 4000,
  user: process.env.DBUSER
};
