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