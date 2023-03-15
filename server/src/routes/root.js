const express = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const rootRoute = express.Router()
const {register, login} = require('../handlers/loginSignup')
rootRoute.post('/register',register)

rootRoute.post('/login',login)

module.exports = rootRoute