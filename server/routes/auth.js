const express = require('express');
const router = express.Router();
const passport = require('passport')

const { asyncErrorHandle } = require('../middlewares/middleware')
const User = require('../models/user');

const { registerUser, loginUser, logoutUser } = require('../controllers/authentication')

router.post('/api/v1/create/user', asyncErrorHandle(registerUser))

router.post('/api/v1/login/user', asyncErrorHandle(loginUser))

router.get('/api/v1/logout/user', asyncErrorHandle(logoutUser))

module.exports = router