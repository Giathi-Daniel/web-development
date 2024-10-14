// import the package
const mysql = require('mysql2')
require('dotenv').config()

// create connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

// connect
db.connect((err) => {
    if(err) {
        console.log('Error connecting to database', err.stack)
        return
    }
    console.log('Connection successful to the database')
})

// export the connection
module.exports = db