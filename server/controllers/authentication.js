const passport = require('passport');
const User = require('../models/user');
const OtpToken = require('../models/otpToken')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const sendEmail = require('../sendEmails/verifyAccount')

module.exports.registerUser = async(req, res) => {

    try {

        const { email, username, password } = req.body

        const user = new User({ email, username })
        const newUser = await User.register(user, password)

        const otp = `${Math.floor(1000 + Math.random() * 9000)}`

        const otpText = `<div>
        Hello There, ${newUser.username}, in order to verify your account please enter the the following code ${otp}
        </div>`

        const salt = 10;

        const hashedOtp = await bcrypt.hash(otp, salt)

        await sendEmail({
            email: email,
            subject: 'Account Verification',
            text: otpText
        })


        const otpVerificationModel = new OtpToken({
            userId: newUser._id,
            otpSecret: hashedOtp,
            createdAt: Date.now(),
            expiresAt: Date.now() + 10 * 60 * 1000
        })

        await otpVerificationModel.save()

        return res.status(200).send({
            status: 'success',
            message: 'Created new user',
            data: { otpVerificationModel }
        })

    } catch (error) {

        res.status(400).send({
            status: 'fail',
            message: error,
            data: null
        });

    }
}


module.exports.loginUser = async(req, res, next) => {

    try {

        passport.authenticate('local', { failureRedirect: 'http://localhost:3000/sign-in' }, async(err, user) => {

            if (err) throw err;

            if (!user) {

                res.status(404).send({
                    status: 'fail',
                    message: "User doesn't exist",
                    data: null
                });

            }

            req.login(user, err, async function() {

                if (err) throw err;

                const foundUser = await User.findOne({ _id: req.user.id })

                if (foundUser.isVerified === false) {

                    return res.status(403).send({
                        status: 'fail',
                        message: 'Unable to sign in to your account',
                        reason: 'Account is not verified, please verify your account in order to use our service'
                    });

                } else {

                    return res.status(200).send({
                        status: 'success',
                        message: 'successfuly signed in',
                        data: foundUser
                    })

                }

            })

        })(req, res, next)

    } catch (error) {

        return res.status(401).send({
            status: 'fail',
            message: error,
            data: null
        });

    }
}

module.exports.logoutUser = async(req, res) => {

    try {

        const currentUser = await User.findOne({ _id: req.user.id })

        if (!currentUser) {

            return res.status(400).send({
                status: "fail",
                message: 'to start off, the account was not logged in'
            })

        }

        req.logout()

        return res.status(200).send({
            status: 'success',
            messasge: 'successfuly logged out',
        })

    } catch (error) {

        return res.status(400).send({
            status: "fail",
            message: 'something went wrong'
        })


    }

}

module.exports.verifyAuthToken = async(req, res) => {

    try {

        const foundUser = await User.findOne({ username: req.body.username })

        if (!foundUser) {

            return res.status(404).send({
                status: 'fail',
                message: "cannot find existing user with those credentials",
                data: null
            });
        }

        const foundUserId = foundUser._id

        const foundOtpToken = await OtpToken.findOne({ userId: foundUserId })

        if (!foundOtpToken) {

            return res.status(404).send({
                status: 'fail',
                message: "account doesn't exist or has been verified already",
                data: null
            });

        }

        const experationDate = foundOtpToken.expiresAt

        if (experationDate < Date.now()) {

            await OtpToken.deleteMany({ _id: foundOtpToken.id })

            return res.status(401).send({
                status: 'fail',
                message: 'Code has expired please try again',
            });

        }

        const validOtp = await bcrypt.compare(req.body.otp, foundOtpToken.otpSecret)

        if (!validOtp) {

            return res.status(401).send({
                status: 'fail',
                message: 'The Code You Entered Was Invalid',
            });

        }

        await OtpToken.deleteMany({ _id: foundOtpToken.id })

        await User.updateOne(foundUser, { $set: { isVerified: true } }, { runValidators: true })

        await foundUser.save()

        req.login(foundUser, function(err) {

            if (err) { return next(err); }

            return res.status(200).send({
                status: 'success',
                messasge: 'auth token verified',
                data: { validOtp, foundUser }
            })

        });



    } catch (error) {

        return res.status(401).send({
            status: 'fail',
            message: error.message,
        });


    }

}

module.exports.getPasswordReset = async(req, res) => {

    try {

        const foundUser = await User.findOne({ email: req.body.email })

        if (!foundUser) {

            return res.status(404).send({
                status: 'fail',
                message: 'Cannot find user with those credentials',
            });

        }

        const resetToken = foundUser.createPasswordResetToken()
        await foundUser.save({ validateBeforeSave: false });

        const resetUrl = `localhost:3000/reset-my-password/${resetToken}`
        const messageResetToken = `Forgot Your Password?! Submit a request to ${resetUrl} If you didnt request a password reset then please ignore this email`

        await sendEmail({
            email: req.body.email,
            subject: 'Password Reset',
            text: messageResetToken

        })

        res.status(200).send({
            status: 'success',
            message: "Successfuly send reset token",
            data: { resetToken }
        })

    } catch (error) {

        return res.status(401).send({
            status: 'fail',
            message: error.message,
        });
    }
}


module.exports.resetPasswordWithToken = async(req, res) => {

    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.resetToken)
        .digest('hex')

    const foundUser = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpires: { $gt: Date.now() } })

    if (!foundUser) {

        return res.status(404).send({
            status: "fail",
            message: "Cannot find user with that reset token"
        })

    }

    res.status(200).send({
        status: 'success',
        message: "Successfuly retrieve user data",
        data: { foundUser }
    })

    // "Token is invalid or has expired"

}