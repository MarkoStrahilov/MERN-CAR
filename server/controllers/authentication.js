const passport = require('passport');
const User = require('../models/user');

module.exports.registerUser = async(req, res) => {

    try {

        const { email, username, password } = req.body
        const user = new User({ email, username })
        const newUser = await User.register(user, password)

        res.status(200).send({
            status: 'Created new user',
            data: { newUser }
        })

    } catch (error) {

        res.status(400).send({
            status: 'fail',
            message: error
        });

    }
}


module.exports.loginUser = async(req, res, next) => {
    try {

        passport.authenticate('local', { failureRedirect: 'http://localhost:3000/sign-in' }, (err, user) => {

            if (err) throw err;

            if (!user) {

                res.status(404).send({
                    status: 'fail',
                    message: "User doesn't exist"
                });

            } else {

                req.login(user, err => {
                    if (err) throw err;

                    res.status(200).send({
                        status: 'successfuly signed in',
                        data: req.user
                    })

                })
            }
        })(req, res, next)

    } catch (error) {

        res.status(401).json({
            status: 'fail',
            message: error
        });

    }
}

module.exports.logoutUser = async(req, res) => {

    req.logout()
    res.status(200).send('successfuly logged out')

}