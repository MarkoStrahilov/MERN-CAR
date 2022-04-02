const express = require('express');
const router = express.Router();

const { asyncErrorHandler } = require('../middlewares/middleware')
const User = require('../models/user');

const { registerUser } = require('../controllers/authentication')

router.post('/api/v1/create/user', registerUser)

module.exports = router