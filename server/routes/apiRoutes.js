const express = require('express');
const router = express.Router({ mergeParams: true });

// require middleware 
const { asyncErrorHandle, isLoggedIn } = require('../middlewares/middleware')

// require authentication functions
const { registerUser, loginUser, logoutUser, verifyAuthToken, getPasswordReset, resetPasswordWithToken } = require('../controllers/authentication')

// require user functions
const { getUser, getMe, disableAccount, deleteAccount } = require('../controllers/user')

// require car listing functions
const { createCarListing, getCarListing, getCarListings, saveCarLising, unSaveCarListing } = require('../controllers/carListing')

// require listing offers function
const { listingOffers } = require('../controllers/offers')

// require listing types
const { listingsForSale, listingsForRent } = require('../controllers/listingTypes')

// user authentication routes
router.post('/api/v1/auth/create/user', asyncErrorHandle(registerUser))

router.post('/api/v1/auth/login/user', asyncErrorHandle(loginUser))

router.get(`/api/v1/auth/logout/user`, asyncErrorHandle(logoutUser))

router.post('/api/v1/auth/verify/auth/token/user', asyncErrorHandle(verifyAuthToken))

router.post('/api/v1/auth/password/reset', asyncErrorHandle(getPasswordReset))

router.patch('/api/v1/auth/password/reset/:resetToken', asyncErrorHandle(resetPasswordWithToken))

// user routes
router.get('/api/v1/user/:username', asyncErrorHandle(getUser))

router.get('/api/v1/user/currentUser', asyncErrorHandle(getMe))

router.delete('/api/v1/user/:id/disable/account', asyncErrorHandle(disableAccount))

router.delete('/api/v1/user/:id/delete/account', asyncErrorHandle(deleteAccount))

// car listing routes
router.get('/api/v1/get/car/listing/:id', asyncErrorHandle(getCarListing))

router.post('/api/v1/create/car/listing', asyncErrorHandle(createCarListing))

router.get('/api/v1/query/car/listings/data', asyncErrorHandle(getCarListings))

router.post('/api/v1/user/:userId/listing/:carId/save/listing', asyncErrorHandle(saveCarLising))

router.delete('/api/v1/user/:userId/listing/:carId/unsave/listing', asyncErrorHandle(unSaveCarListing))

// listing offers routes
router.get('/api/v1/get/listing/offers', asyncErrorHandle(listingOffers))

// listing types
router.get('/api/v1/get/listing/type/sale', asyncErrorHandle(listingsForSale))

router.get('/api/v1/get/listing/type/rent', asyncErrorHandle(listingsForRent))


module.exports = router