const express = require('express')
const rootRoute = express.Router()
const {register, login, logout} = require('../handlers/loginSignup')
const {isLoggedIn} = require('../middlewares/auth')
const {dashboard} = require('../handlers/dashboard')

rootRoute.post('/register',register)

rootRoute.post('/login',login)

rootRoute.post('/logout',logout)

rootRoute.post('/isLoggedIn', isLoggedIn)

rootRoute.post('/dashboard', dashboard)

// rootRoute.post('/checkLogin', )

module.exports = rootRoute