const User = require('../models/user');

module.exports.getUser = async(req, res) => {

    try {

        const foundUser = await User.findOne({ username: req.params.username })


        if (!foundUser) {

            res.status(404).send({
                status: "fail",
                message: "Can't find user",
                data: null
            });
        }

        res.status(200).send({
            status: 'success',
            message: 'GET user data',
            data: { foundUser }
        })

    } catch (error) {

        res.status(404).send({
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

            res.status(404).send({
                status: "fail",
                message: "Can't find user",
                data: null
            });
        }

        res.status(200).send({
            status: 'success',
            message: 'GET user data',
            data: { currentUser }
        })

    } catch (error) {

        res.status(404).send({
            status: 'fail',
            message: error,
            data: null
        })

    }


}