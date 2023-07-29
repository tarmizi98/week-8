const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'data dvd',
    password: '943167',
    port: 5432,
})

module.exports = pool