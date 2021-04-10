const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const Database = open(
  {
    filename: './database.sqlite',
    driver: sqlite3.Database,
  },
);

module.exports = Database;
