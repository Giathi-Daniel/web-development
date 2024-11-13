const express = require('express')
const router = express.Router()
const isAuthenticated = require('../middleware/authMiddleware')
const userController = require('../controllers/userController')

// protected profile route
router.get('/profile', isAuthenticated, userController.getProfile)

module.exports = router