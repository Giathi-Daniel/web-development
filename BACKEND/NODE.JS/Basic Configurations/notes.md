# A BASIC SERVER
```
const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, Web Development')
})

const PORT = 3000

server.listen(PORT, () => {
    console.log('listening on port')
})
```

# Basic Route Check
```
const http = require('http')

const server = http.createServer((req, res) => {
    // access the req and it's url property and check the default route
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Welcome to the landing page')
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Welcome to the about us page')
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Page not found.')
    }
})

const PORT = 5000

server.listen(PORT, () => {
    console.log('listening on port')
})
```
# REQUESTS
HTTP - INSECURE
HTTPS - Secure & uses SSL certificate

# CREATE A BASIC SERVER
```
const express = require('express')

// a variable that will hold our server
const app = express()

// define port
const PORT = 3300

// create our first route
app.get('/', (req, res) => {
    res.send('Welcome! You have successfully used express package')
})

// launch server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
```

# connect to the database and the server
```
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
```

```
const express = require('express')
const db = require('./database')

// a variable that will hold our server
const app = express()

// define port
const PORT = 3300

// create our first route
app.get('/', (req, res) => {
    res.send('Welcome! You have successfully used express package')
})

// launch server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
```

# interacting with the database
```
const express = require('express')
const db = require('./database')

// a variable that will hold our server
const app = express()

// define port
const PORT = 3300

// CRUD OPERATIONS
// **CREATE TABLE**
app.get('/createTable', (req, res) => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `
    db.query(sql, (err) => {
        if(err) {
            console.error('Error executing query')
            return res.status(500).send('Server error')
        }
        res.status(201).send('users table created successfully')
    })
})

// **CREATE USER**
app.post('/createUser', (req, res) => {
    const sql = `
        INSERT INTO users (name, email) VALUES ('Daniel', 'daniel@gmail.com')
    `
    db.query(sql, (err) => {
        if(err) {
            console.error('Error executing query', err.stack)
            return res.status(500).send('Error creating user')
        }
        res.status(201).send('users record created successfully')
    })
})

// **UPDATE USER**
app.put('/updateUser', (req, res) => {
    const sql = `
        UPDATE users
            SET name = 'John'
            WHERE name = 'Daniel'
    `
    db.query(sql, (err) => {
        if(err) {
            console.error('Error executing query', err.stack)
            return res.status(500).send('Error updating user')
        }
        res.status(201).send('users record updated successfully')
    })
})

// **DELETE USER**
app.delete('/deleteUser', (req, res) => {
    const sql = `
        DELETE FROM users
            WHERE name = 'John'
    `
    db.query(sql, (err) => {
        if(err) {
            console.error('Error executing query', err.stack)
            return res.status(500).send('Error deleting user')
        }
        res.status(201).send('users record deleted successfully')
    })
})


app.get('/', (req, res) => {
    res.send('Welcome! You have successfully used express package')
})

// launch server
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
```