const mysql  = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

module.exports = pool