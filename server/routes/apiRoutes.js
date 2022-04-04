const express = require('express');
const router = express.Router({ mergeParams: true });

// require middleware 

const { asyncErrorHandle } = require('../middlewares/middleware')

// require authentication routes

const { registerUser, loginUser, logoutUser } = require('../controllers/authentication')

// require user routes

const { getUser } = require('../controllers/user')

// require car listings routes

const { createCarListing, getCarListing } = require('../controllers/carListing')


// user authentication routes

router.post('/api/v1/create/user', asyncErrorHandle(registerUser))

router.post('/api/v1/login/user', asyncErrorHandle(loginUser))

router.get(`/api/v1/logout/user`, asyncErrorHandle(logoutUser))

// user routes

router.get('/api/v1/user/:username', asyncErrorHandle(getUser))

// car listings routes

router.get('/api/v1/get/car/listing/:id', asyncErrorHandle(getCarListing))

router.post('/api/v1/create/car/listing', asyncErrorHandle(createCarListing))

module.exports = router