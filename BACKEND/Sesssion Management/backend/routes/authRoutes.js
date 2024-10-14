const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')


// signup
router.post('/signup', authController.signup)

// login
router.post('/login', authController.login)

// loguot
router.get('/logout', authController.logout)

// Route for getting user profile(Dashoard)
router.get('/dashboard', authController.getDashboard)

module.exports = router