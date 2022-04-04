const express = require('express');
const router = express.Router({ mergeParams: true });


const { asyncErrorHandle } = require('../middlewares/middleware')

const { registerUser, loginUser, logoutUser, getUser } = require('../controllers/authentication')


router.post('/api/v1/create/user', asyncErrorHandle(registerUser))

router.post('/api/v1/login/user', asyncErrorHandle(loginUser))

router.get(`/api/v1/logout/user`, asyncErrorHandle(logoutUser))

router.get('/api/v1/user/:username', asyncErrorHandle(getUser))

module.exports = router