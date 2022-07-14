const User = require('../models/user');
const NotActiveAccounts = require('../models/notActiveAccounts')

module.exports.getUser = async(req, res) => {

    try {

        const foundUser = await User.findOne({ username: req.params.username }).populate('carListings')

        if (!foundUser) {

            return res.status(404).send({
                status: "fail",
                message: "Can't find user",
                data: null
            });
        }

        return res.status(200).send({
            status: 'success',
            message: 'GET user data',
            data: { foundUser }
        })

    } catch (error) {

        return res.status(404).send({
            status: 'fail',
            message: error,
            data: null
        })

    }

}


module.exports.getMe = async(req, res) => {

    try {

        const currentUser = await User.findOne({ _id: req.user.id })

        if (!foundUser) {

            return res.status(404).send({
                status: "fail",
                message: "Can't find user",
                data: null
            });
        }

        return res.status(200).send({
            status: 'success',
            message: 'GET user data',
            data: { currentUser }
        })

    } catch (error) {

        const { status, message } = error

        return res.status(status).send({
            status: 'fail',
            message: message,
            data: null
        })

    }

}

module.exports.disableAccount = async(req, res) => {

    try {

        const foundUser = await User.findOne({ _id: req.params.id })

        if (!foundUser) {

            return res.status(404).send({
                status: 'fail',
                message: "Cannot find account"
            })

        }

        if (foundUser.isDisabled === true) {

            return res.status(400).send({
                status: 'fail',
                message: "account has been previously disabled"
            })

        } else {

            await User.updateOne({ _id: foundUser._id }, { $set: { isDisabled: true } })

            const deactivateAccount = new NotActiveAccounts({
                disabledAccount: foundUser._id
            })

            await deactivateAccount.save()

        }

        return res.status(200).send({
            status: "success",
            message: "account was successfuly disabled",
            data: { foundUser }
        })

    } catch (error) {

        const { message } = error

        return res.status(400).send({
            status: 'fail',
            message: message
        })

    }

}

module.exports.deleteAccount = async(req, res) => {

    try {

        const foundUser = await User.findOne({ _id: req.params.id })

        if (!foundUser) {

            return res.status(404).send({
                status: 'fail',
                message: "Cannot find account"
            })

        }

        const findUserAndDelete = await User.findOneAndDelete({ _id: foundUser._id })

        if (findUserAndDelete) {

            return res.status(200).send({
                status: "success",
                message: "account was successfuly deleted",
            })

        }

    } catch (error) {

        const { message } = error

        return res.status(400).send({
            status: 'fail',
            message: message
        })

    }

}