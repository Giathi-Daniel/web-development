const express = require('express')
const sessionMiddleware = require('./config/session')
const authRoutes = require('./routes/authRoutes')
const path = require('path')


// inititalize app
const app = express()

// Middleware to parse JSON bodies
app.use(express.json()) 

// Middleware to serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client'))) 


// session middleware
app.use(sessionMiddleware)


// Routes
app.use('/', authRoutes)

// Fallback route to serve index.html for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});


// start the sercer
app.listen(3000, () => {
    console.log('Server running on port 3000')
})