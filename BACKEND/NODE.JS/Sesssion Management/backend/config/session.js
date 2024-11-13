const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const pool = require('./db')

// configure session storage
const sessionStore = new MySQLStore({}, pool)

// set-up session middleware
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1 hour
        secure: false // set to true if using https
    }
})


module.exports = sessionMiddleware