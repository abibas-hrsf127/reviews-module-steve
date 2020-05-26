const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'stevemarquez',
  host: 'localhost',
  database: 'adidas_sdc',
  password: '',
  port: 5432,
})
module.exports = pool;