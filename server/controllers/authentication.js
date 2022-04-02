const User = require('../models/user');
const passport = require('passport');

module.exports.registerUser = async(req, res) => {

    try {

        const { email, username, pass } = req.body
        const newUser = new User({ email, username })
        console.log(newUser)

    } catch (error) {
        console.log(error)
    }


}