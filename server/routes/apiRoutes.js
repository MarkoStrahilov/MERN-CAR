const express = require('express');
const router = express.Router({ mergeParams: true });

// require middleware 
const { asyncErrorHandle } = require('../middlewares/middleware')

// require authentication functions
const { registerUser, loginUser, logoutUser, verifyAuthToken } = require('../controllers/authentication')

// require user functions
const { getUser, getMe } = require('../controllers/user')

// require car listings functions
const { createCarListing, getCarListing, getCarListings } = require('../controllers/carListing')

// require listings offer function
const { listingOffers } = require('../controllers/offers')

// user authentication routes
router.post('/api/v1/auth/create/user', asyncErrorHandle(registerUser))

router.post('/api/v1/auth/login/user', asyncErrorHandle(loginUser))

router.get(`/api/v1/auth/logout/user`, asyncErrorHandle(logoutUser))

router.post('/api/v1/auth/verify/auth/token/user', asyncErrorHandle(verifyAuthToken))

// user routes
router.get('/api/v1/user/:username', asyncErrorHandle(getUser))

router.get('/api/v1/user/currentUser', asyncErrorHandle(getMe))

// car listings routes
router.get('/api/v1/get/car/listing/:id', asyncErrorHandle(getCarListing))

router.post('/api/v1/create/car/listing', asyncErrorHandle(createCarListing))

router.get('/api/v1/query/car/listings/data', asyncErrorHandle(getCarListings))

// listings offers routes
router.get('/api/v1/get/listing/offers', asyncErrorHandle(listingOffers))

module.exports = router